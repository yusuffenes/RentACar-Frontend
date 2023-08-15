import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  dataLoaded = false;
  cars:Car[] = [];



  constructor(private carService:CarService,private activatedRoute:ActivatedRoute){};   /// Active olmuş sayfa hangisi ise onu acar


  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(params => {
      if (params["id"]){
        this.getCarsByBrand(params["id"])
      }
      else if (params["colorId"]){
        this.getCarsByColor(params["colorId"])
      }
      else{
        this.getCars();
      }
    });
  }

  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars = response.data
      this.dataLoaded = true;
  })
  }

  getCarsByBrand(id:number){
    this.carService.getCarsByBrand(id).subscribe(response=>{
      this.cars = response.data
      this.dataLoaded = true;
  })
  }

  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(response=>{
      this.cars = response.data
      this.dataLoaded = true;
    })
  }


}