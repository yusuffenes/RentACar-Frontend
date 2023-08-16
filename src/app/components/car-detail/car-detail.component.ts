import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarDetail } from 'src/app/models/car-detail';
import {BackendUrl} from "../../services/serviceConstans";
import {CarService} from "../../services/car.service";
import { CarImageService } from 'src/app/services/car-image.service';
import { CarImage } from 'src/app/models/car-image';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  carDetails:CarDetail[]=[]
  carDetail:CarDetail[]
  carImage:CarImage
  dataLoaded=false;
  apiUrl="https://localhost:44390/Images/";
  defaultImagePath = 'https://img.piri.net/mnresize/840/-/resim/imagecrop/2018/06/23/03/43/resized_98b07-2dbacae12018audia7sportback.jpg';

  private router: Router
  constructor(private carDetailService:CarDetailService,
    private carImageService:CarImageService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.getCarDetailsByCarId(params["id"]);
      this.getCarImageByCarId(params["id"]);
    })
  }



  getCarDetailsByCarId(id:number){
     this.carDetailService.getCarDetailsByCarId(id).subscribe(response=>{
     this.carDetails=response.data;
     this.dataLoaded=true
    })
  }
  getCarImageByCarId(carId:number){
    this.carImageService.getCarImagesByCar(carId).subscribe(response=>{
      this.carImage = response?.data[0];
      this.dataLoaded=true;  
    })
  }
  getImagePath(carImage: CarImage):string {
    let url:string="https://localhost:44315/" + carImage.imageFolder
    return  url;
  }
  addToCart(car:Car){
    console.log(car)
  }
  enlargeImage(carImage: CarImage) {
    const modal = document.createElement('div');
    modal.classList.add('image-modal');
    modal.innerHTML = `<img src="${this.getImagePath(carImage)}" class="enlarged-img">`;
    
    modal.addEventListener('click', () => {
        modal.remove();
    });
    
    document.body.appendChild(modal);
}

}
