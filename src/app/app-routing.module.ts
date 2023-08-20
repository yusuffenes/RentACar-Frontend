import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';


const routes: Routes = [
  { path: '',pathMatch:"full",component: CarComponent},
  {path:'cars',component: CarComponent},
  { path: "car/brand/:brandId", component: CarComponent },
  { path: "car/color/:colorId", component: CarComponent },
  { path: "car/detail/:carId", component: CarDetailComponent }

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
