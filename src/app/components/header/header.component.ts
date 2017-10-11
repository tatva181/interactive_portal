import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
	selector: 'header-component',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
	constructor(private _router: Router, private _location: Location) { }
	
	ngOnInit(): void{
		console.log('header initialized!');
		
	}

	goBack(): void {
		this._location.back();
	}
}
