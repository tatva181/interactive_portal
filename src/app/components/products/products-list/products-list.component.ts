import { Component } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { ConstantsService } from '../../../services/constants.service';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
	selector: 'products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.css'],
	providers: [ProductsService,ConstantsService]
})
export class ProductsListComponent {
	products: any;
	loadedProductsTemp : any;
	view : string;
	htmlString : string = '';
	pageNo : number = 1;
	perPage = 4;
	len :number;
	@ViewChild('htmlToAdd') d1:ElementRef;
	constructor(private productService: ProductsService,private constantsService: ConstantsService) { }
	ngOnInit() {
		this.productService.getProduct(this.constantsService.ajaxUrl).then(
			res => {
        		this.products = res;
        		this.len = this.products.length;
			},
			err => {
			  console.log("Error occured");
			}
		);
	}

	onLoadMore(){
		this.productService.loadMoreProduct(this.pageNo,this.constantsService.ajaxUrl).then(
			res => {
        		this.loadSuccessFunction(res);
			},
			err => {
			  this.loadErrorFunction();
			}
		);
	}

	loadSuccessFunction(res){
		this.loadedProductsTemp = res;
		this.len = this.loadedProductsTemp.length;
		this.htmlString = '';
		for (var i = 0; i < this.len; i++) {
			this.htmlString += '<a href="#" class="col-sm-3 product"><img src="/assets/images/'+this.loadedProductsTemp[i]['img']+'"/><h3>'+this.loadedProductsTemp[i]['title']+'</h3><p>'+this.loadedProductsTemp[i]['description']+'</p></a>';
		}
		this.d1.nativeElement.insertAdjacentHTML('beforeend', this.htmlString);
		this.pageNo ++;
	}

	loadErrorFunction(){
		console.log("Error occured");
	}
}
