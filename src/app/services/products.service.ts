import { Injectable } from '@angular/core';

@Injectable()

export class ProductsService {
    getProduct() {
    	const result :any[] = [
					{title:"Hazel Pink",description:"Hair makeup and semi-permanent hair color",img:"pink.png"},
					{title:"#FlauntYourFearless",description:"Strike a pose and rock pink hair for one wash like Shinestruck",img:"curly.png"},
					{title:"#ClairolColorCrave",description:"Hair makeup and semi-permanent hair color",img:"chinese.png"},
					{title:"Hazel Pink",description:"Hair makeup and semi-permanent hair color",img:"pink.png"},
					{title:"#FlauntYourFearless",description:"Strike a pose and rock pink hair for one wash like Shinestruck",img:"curly.png"},
					{title:"#ClairolColorCrave",description:"Hair makeup and semi-permanent hair color",img:"chinese.png"},
					{title:"#FlauntYourFearless",description:"Strike a pose and rock pink hair for one wash like Shinestruck",img:"curly.png"},
					{title:"#ClairolColorCrave",description:"Hair makeup and semi-permanent hair color",img:"chinese.png"},
				];
        return result;
    }
    
    loadMoreProduct(pageNo) {
    	if(pageNo == 1) {
	    	const result :any[] = [
					{title:"Hazel Pink",description:"Hair makeup and semi-permanent hair color",img:"pink.png"},
					{title:"#FlauntYourFearless",description:"Strike a pose and rock pink hair for one wash like Shinestruck",img:"curly.png"},
					{title:"#ClairolColorCrave",description:"Hair makeup and semi-permanent hair color",img:"chinese.png"},
					{title:"Hazel Pink",description:"Hair makeup and semi-permanent hair color",img:"pink.png"},
				];
			return result;
    	} else if(pageNo == 2) {
    		const result :any[] = [
					{title:"#FlauntYourFearless",description:"Strike a pose and rock pink hair for one wash like Shinestruck",img:"curly.png"},
					{title:"#ClairolColorCrave",description:"Hair makeup and semi-permanent hair color",img:"chinese.png"},
				];
			return result;
    	} else {
    		return '';
    	}
    }
}