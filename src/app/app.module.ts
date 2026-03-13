import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FilterByNamePipe } from './filter-by-name.pipe';
import { SortByPricePipe } from './sort-by-price.pipe';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    FilterByNamePipe,
    SortByPricePipe,
    ProductComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
