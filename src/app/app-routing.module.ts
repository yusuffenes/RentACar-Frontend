import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { BrandComponent } from './components/brand/brand.component';
import {CarDetailComponent} from "./components/car-detail/car-detail.component";
import {CustomerComponent} from "./components/customer/customer.component";
import {RentalComponent} from "./components/rental/rental.component";

const routes: Routes = [
  { path: '',pathMatch:"full",component: CarComponent},
  {path:'cars',component: CarComponent},
  {path:'cars/brand/:id',component: CarComponent},
  {path:'cars/color/:id',component: CarComponent},
  {path:'cars/cardetail/:id',component: CarDetailComponent},
  {path:"cardetail/:id", component:CarDetailComponent},
  {path:"cars/brand/:id/color/:id", component:CarComponent},

  {path:"cars/brand/:id/color/:id", component:CarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
