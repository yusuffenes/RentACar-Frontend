import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { NaviComponent } from './components/navi/navi.component';
import { RentalComponent } from './components/rental/rental.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';


import { CarImageComponent } from './components/car-image/car-image.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrandFilterPipe } from './pipes/brand-filter.pipe';
import { ColorFilterPipe } from './pipes/color-filter.pipe';
import { ToastrModule } from 'ngx-toastr';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import {PaymentComponent} from "./components/payment/payment.component";
import { PayComponent } from './components/pay/pay.component';
import { RentalAddComponent } from './components/rental-add/rental-add.component';


@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    CarComponent,
    BrandComponent,
    NaviComponent,
    RentalComponent,
    ColorComponent,
    CustomerComponent,
    CarDetailComponent,

    CarImageComponent,
    BrandFilterPipe,
    ColorFilterPipe,
    CartSummaryComponent,
    PaymentComponent,
    PayComponent,
    RentalAddComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot({progressBar: true, timeOut: 2400, closeButton: true, positionClass: 'toast-bottom-right'}),
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class AppModule { }
