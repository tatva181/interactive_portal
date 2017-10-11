import { Component } from '@angular/core';
import { Location } from '@angular/common';
import {trigger, state, animate, style, transition} from '@angular/animations';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls : ['./app.component.css'],
})
export class AppComponent {
	site_name = 'Interactive Portal';
	constructor(private _location: Location) { }

	ifHome() : boolean{
		return this._location.isCurrentPathEqualTo('/home');
	}
}
