import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { AppComponent } from '../../../app.component';

import { ProductsService } from '../../../services/products.service';

@Component({
	selector: 'products-details-component',
	templateUrl: './products-details.component.html',
	styleUrls: ['./products-details.component.css'],
	providers: [ProductsService],
})
export class ProductsDetailsComponent implements OnInit {
	constructor(
		private route: ActivatedRoute,
		private productsService: ProductsService
	) { }

	public loading = false;

	@Input() product: any;

	ngOnInit(): void {
		this.loading = true;
		this.route.paramMap
			.switchMap((params: ParamMap) => this.productsService.getProductById(+params.get('id')))
			.subscribe(product => {
				this.product = product;
				this.loading = false;
			});
	}

}
