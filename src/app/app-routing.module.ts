import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { RentalComponent } from './components/rental/rental.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PayComponent } from './components/pay/pay.component';
import { RentalAddComponent } from './components/rental-add/rental-add.component';


const routes: Routes = [
  { path: '',pathMatch:"full",component: CarComponent},
  {path:'cars',component: CarComponent},
  { path: "car/brand/:brandId", component: CarComponent },
  { path: "car/color/:colorId", component: CarComponent },
  { path: "car/detail/:carId", component: CarDetailComponent },
  { path: "car/brand/:brandId", component: BrandComponent },
  {path:"payment/pay",component:PayComponent},
  {path:"rentals/add",component:RentalAddComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
