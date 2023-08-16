import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Car} from "../../models/car";
import {CarDetail} from "../../models/car-detail";
import {CarService} from "../../services/car.service";
import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from 'src/app/services/color.service';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  backendUrl: string = "https://localhost:44390/Images/";

  cars: Car[];
  carDetails: CarDetail[];
  carImagesUrl: string[];

  constructor(private carService: CarService, private activatedRoute: ActivatedRoute,private router: Router
    ,private brandService:BrandService,
    private colorService:ColorService,) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["id"]) {
        this.getCarByBrand(params["id"]);
      }

      else if (params["id"]) {
        this.getCarByColor(params["id"]);
      }
      else if(params["id"]) {
        this.getCarsByCarId(params["id"]);
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

  getCarByBrand(id: Number) {
    this.carService.getCarsByBrand(id).subscribe(response => {
      this.carDetails = response.data;
    })
  }

  getCarByColor(id: Number) {
    this.carService.getCarsByColor(id).subscribe(response => {
      this.carDetails = response.data;
    })
  }
  getCarsByCarId(id: Number) {
    this.carService.getCarsByCarId(id).subscribe(response => {
      this.carDetails = response.data;
    })
  }
}
