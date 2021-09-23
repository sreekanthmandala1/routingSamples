import { ContactUsModule } from './components/contact-us/contact-us.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ProductsComponent } from './components/products/products.component';
import { ServicesComponent } from './components/services/services.component';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    ProductsComponent,
    ServicesComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    {provide: LocationStrategy, useClass:PathLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log('constructor module loaded');
  }
 }
