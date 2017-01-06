//setup app

import { NgModule, Component, Input, Attribute } from '@angular/core';
//import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
//import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import 'rxjs/add/operator/map';

import { HeroesComponent }  from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
        //routing,
    ],
    declarations: [
        HeroesComponent,
        HeroDetailComponent
    ],
    bootstrap: [HeroesComponent],
})
export class AppModule {

}
