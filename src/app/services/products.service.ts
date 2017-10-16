import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class ProductsService {
	private productsUrl = 'api/products';  // URL to web api

	constructor(
		private http: Http,
	) { }

	getProduct(): Promise<any> {
		return this.http.get(this.productsUrl)
			.toPromise()
			.then(response => response.json())
			.catch(this.handleError);
	}

	loadMoreProduct(pageNo) {
		
		if (pageNo == 1) {
			const result: any[] = [
				{ id: 1, title: "Hazel Pink", description: "Hair makeup and semi-permanent hair color", img: "pink.png" },
				{ id: 2, title: "#FlauntYourFearless", description: "Strike a pose and rock pink hair for one wash like Shinestruck", img: "curly.png" },
				{ id: 3, title: "#ClairolColorCrave", description: "Hair makeup and semi-permanent hair color", img: "chinese.png" },
				{ id: 4, title: "Hazel Pink", description: "Hair makeup and semi-permanent hair color", img: "pink.png" },
			];
			return result;
		} else if (pageNo == 2) {
			const result: any[] = [
				{ id: 1, title: "#FlauntYourFearless", description: "Strike a pose and rock pink hair for one wash like Shinestruck", img: "curly.png" },
				{ id: 2, title: "#ClairolColorCrave", description: "Hair makeup and semi-permanent hair color", img: "chinese.png" },
			];
			return result;
		} else {
			return '';
		}
	}

	getProductById(id: number): Promise<any> {
		const url = `${this.productsUrl}/${id}`;

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