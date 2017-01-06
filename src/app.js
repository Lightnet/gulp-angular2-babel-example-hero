//setup app

import { NgModule, Component, Input, Attribute } from '@angular/core';
//import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
//import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import 'rxjs/add/operator/map';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
        //routing,
    ],
    declarations: [
        AppComponent,
        HeroDetailComponent
    ],
    bootstrap: [AppComponent],
})
export class AppModule {

}
