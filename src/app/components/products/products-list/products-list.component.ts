import { Component } from '@angular/core';
import { ProductsService } from '../../../services/products.service';

@Component({
	selector: 'products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.css'],
	providers: [ProductsService]
})
export class ProductsListComponent {
	products: any;
	constructor(private _productService: ProductsService) { }

	ngOnInit() {
		this.products = this._productService.getProduct();
	}
}