import { Component, Output, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {trigger, state, animate, style, transition} from '@angular/animations';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls : ['./app.component.css'],
})
export class AppComponent implements OnInit {
	site_name = 'Interactive Portal';
	loading = false;

	constructor(private location: Location) { 
		this.loading = false;
	}

	ngOnInit() {
	}
	
	ifHome() : boolean{
		return this.location.isCurrentPathEqualTo('/home');
	}
}
