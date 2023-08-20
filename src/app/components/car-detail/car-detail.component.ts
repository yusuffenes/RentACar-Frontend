import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { BackendUrl } from 'src/app/services/serviceConstants';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent {
  carDetails: CarDetail[];
  carImage:CarImage[];
  backendUrl:string = BackendUrl;
  constructor(private carService: CarService, private activatedRoute: ActivatedRoute,private carImageService:CarImageService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["carId"]) {
        this.getDetail(params["carId"]);
      }
      
    })
  }

  getDetail(id:number){
    this.carService.getCarsByCarId(id).subscribe(response => {
      this.carDetails = response.data;

    })
  }
  getImagePath(imagePath: string) {
    return this.backendUrl + '/Images/' + imagePath;
  }
  getLog(){
    console.log(this.carImage,this.carDetails);
  }
}
