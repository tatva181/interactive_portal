//modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';

//components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { TrendsComponent } from './components/trends/trends.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { ProductsDetailsComponent } from './components/products/products-details/products-details.component';

//route of the application
import { AppRoutingModule } from './app-routing.module';

//services
import { ProductsService } from './services/products.service';
import { ConstantsService } from './services/constants.service';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		HeaderComponent,
		DashboardComponent,
		SearchComponent,
		TrendsComponent,
		FooterComponent,
		ProductsListComponent,
		ProductsDetailsComponent
	],
	imports: [
		BrowserModule,
		HttpModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		InMemoryWebApiModule.forRoot(InMemoryDataService),
		HttpModule,
		LoadingModule.forRoot({
			animationType: ANIMATION_TYPES.threeBounce,
			backdropBackgroundColour: 'rgba(0,0,0,0.1)',
			backdropBorderRadius: '4px',
			primaryColour: '#ffffff',
			secondaryColour: '#ffffff',
			tertiaryColour: '#ffffff'
		})
	],
	providers: [ProductsService, ConstantsService],
	bootstrap: [AppComponent]
})
export class AppModule { }
