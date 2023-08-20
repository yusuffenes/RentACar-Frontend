import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { BackendUrl } from 'src/app/services/serviceConstants';

@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrls: ['./car-image.component.css']
})
export class CarImageComponent {
  hostUrl = BackendUrl;
  image: CarImage[];
  constructor(private imageService: CarImageService,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
    if (params["carId"]){
      this.getImagesByCarId(params["carId"]);
    }

  })
}


  getImagesByCarId(carId: number) {
    this.imageService.getCarImagesByCar(carId).subscribe(response => {
      this.image = response.data;
    })
  }
}
