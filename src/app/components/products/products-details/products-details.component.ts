import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { ProductsService } from '../../../services/products.service';
import { ConstantsService } from '../../../services/constants.service';

@Component({
	selector: 'products-details-component',
	templateUrl: './products-details.component.html',
	styleUrls: ['./products-details.component.css'],
	providers: [ProductsService, ConstantsService]
})
export class ProductsDetailsComponent implements OnInit {
	constructor(
		private route: ActivatedRoute,
		private productsService: ProductsService
	) { }

	@Input() product: any;

	ngOnInit(): void {

		this.route.paramMap
			.switchMap((params: ParamMap) => this.productsService.getProductById(+params.get('id')))
			.subscribe(product => {
				this.product = product;
			});
		
	}
}
