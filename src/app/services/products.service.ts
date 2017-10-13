import { Injectable } from '@angular/core';

@Injectable()

export class ProductsService {
	getProduct() {
		const result: any[] = [
			{ id: 1, title: "Hazel Pink", description: "Hair makeup and semi-permanent hair color", img: "pink.png" },
			{ id: 2, title: "#FlauntYourFearless", description: "Strike a pose and rock pink hair for one wash like Shinestruck", img: "curly.png" },
			{ id: 3, title: "#ClairolColorCrave", description: "Hair makeup and semi-permanent hair color", img: "chinese.png" },
			{ id: 4, title: "Hazel Pink", description: "Hair makeup and semi-permanent hair color", img: "pink.png" },
			{ id: 5, title: "#FlauntYourFearless", description: "Strike a pose and rock pink hair for one wash like Shinestruck", img: "curly.png" },
			{ id: 6, title: "#ClairolColorCrave", description: "Hair makeup and semi-permanent hair color", img: "chinese.png" },
			{ id: 7, title: "#FlauntYourFearless", description: "Strike a pose and rock pink hair for one wash like Shinestruck", img: "curly.png" },
			{ id: 8, title: "#ClairolColorCrave", description: "Hair makeup and semi-permanent hair color", img: "chinese.png" },
		];
		return result;
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
}