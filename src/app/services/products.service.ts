import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { ConstantsService } from './constants.service';

@Injectable()

export class ProductsService {
	headers: Headers;
	options: RequestOptions;

	constructor( private http: Http, private constantsService: ConstantsService ) {
		this.headers = new Headers({
			'Content-Type': 'application/json',
			'Accept': 'q=0.8;application/json;q=0.9'
		});
		this.options = new RequestOptions({ headers: this.headers });
	}
	productsUrl = this.constantsService.ajaxUrl;  // URL to web api

	loadMoreProduct(pageNo: number, url: string): Promise<any> {
		return this.http.post(url, {
			pageNo: pageNo,
			action: 'load',
		}, this.options)
			.toPromise()
			.then(
			res => {
				return res.json();
			},
			err => {
				this.handleError(err);
			}
			).catch(this.handleError);
	}

	getProduct(url: string): Promise<any> {
		url = 'api/products';
		
		// return this.http.post(url, {
		// 	pageNo: pageNo,
		// 	action: 'load',
		// }, this.options)			
		return this.http.get(url)
			.toPromise()
			.then(
			res => {
				return res.json();
			},
			err => {
				this.handleError(err);
			}
			).catch(this.handleError);
	}
	
	getProductById(id: number): Promise<any> {
		const purl = 'api/products';
		const url = `${purl}/${id}`;

		return this.http.get(url)
			.toPromise()
			.then(response => response.json())
			.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred : ', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}