import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';
import { BackendUrl } from 'src/app/services/serviceConstants';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  backendUrl: string = BackendUrl;
  cars: Car[] = [];
  carDetails: CarDetail[];
  carImagesUrl: string[];

  constructor(private carService: CarService, private activatedRoute: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["brandId"]) {
        this.getCarByBrand(params["brandId"]);
      }

      else if (params["colorId"]) {
        this.getCarByColor(params["colorId"]);
      }

      else {
        this.getDetail();
      }
    })
  }

  getCar() {
    this.carService.getCar().subscribe((response) => {
      this.cars = response.data;
    })
  }

  getDetail() {
    this.carService.getDetail().subscribe((response) => {
      this.carDetails = response.data;
    })
  }

  getCarByBrand(brandId: Number) {
    this.carService.getCarsByBrand(brandId).subscribe(response => {
      this.carDetails = response.data;
    })
  }

  getCarByColor(colorId: Number) {
    this.carService.getCarsByColor(colorId).subscribe(response => {
      this.carDetails = response.data;
    })
  }
  
}
