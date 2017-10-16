import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		const products = [
            { id: 1, title: "Hazel Pink", description: "Hair makeup and semi-permanent hair color", img: "pink.png" },
            { id: 2, title: "#FlauntYourFearless", description: "Strike a pose and rock pink hair for one wash like Shinestruck", img: "curly.png" },
            { id: 3, title: "#ClairolColorCrave", description: "Hair makeup and semi-permanent hair color", img: "chinese.png" },
            { id: 4, title: "Hazel Pink", description: "Hair makeup and semi-permanent hair color", img: "pink.png" },
            { id: 5, title: "#FlauntYourFearless", description: "Strike a pose and rock pink hair for one wash like Shinestruck", img: "curly.png" },
            { id: 6, title: "#ClairolColorCrave", description: "Hair makeup and semi-permanent hair color", img: "chinese.png" },
            { id: 7, title: "#FlauntYourFearless", description: "Strike a pose and rock pink hair for one wash like Shinestruck", img: "curly.png" },
            { id: 8, title: "#ClairolColorCrave", description: "Hair makeup and semi-permanent hair color", img: "chinese.png" },
        ];
		return { products };
	}
}