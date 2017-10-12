import { Component } from '@angular/core';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'products_listing',
  templateUrl: './products_listing.component.html',
  styleUrls: ['./products_listing.component.css'],
  providers: [ProductsService]
})
export class ProductsListComponent {
  	products : any;
  	constructor(private _productService: ProductsService) {}

  	ngOnInit() {
		this.products = this._productService.getProduct();
	}
}