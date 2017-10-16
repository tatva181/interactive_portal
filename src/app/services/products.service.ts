import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class ProductsService {
	headers: Headers;
    options: RequestOptions;
    constructor(private http: Http) {
        this.headers = new Headers({ 'Content-Type': 'application/json', 
                                     'Accept': 'q=0.8;application/json;q=0.9' });
        this.options = new RequestOptions({ headers: this.headers });
    }

	loadMoreProduct(pageNo : number,url:string) : Promise<any>{
		return this.http.post(url,{
					pageNo: pageNo,
					action: 'load',
				}, this.options)
            .toPromise()
            .then(
            	res => {
            		return res.json();
				},
				err => {
				  console.log("Error occured");
				}
			);
	}

	getProduct(url:string) : Promise<any>{
		return this.http.post(url,{
					action: 'init'
				}, this.options)
            .toPromise()
            .then(
            	res => {
            		return res.json();
				},
				err => {
				  console.log("Error occured");
				}
			);
	}

}