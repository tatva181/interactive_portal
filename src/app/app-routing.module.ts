import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { TrendsComponent } from './components/trends/trends.component';

//routes
const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'search', component: SearchComponent },
	{ path: 'trends', component: TrendsComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }