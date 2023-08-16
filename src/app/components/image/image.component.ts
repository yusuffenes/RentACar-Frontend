import { Component, OnInit } from '@angular/core';
import {CarImageService} from "../../services/car-image.service";
import { BackendUrl } from 'src/app/services/serviceConstans';
import { CarImage } from 'src/app/models/car-image';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  hostUrl = BackendUrl;
  image: CarImage[];
  constructor(private imageService: CarImageService) { }

  ngOnInit(): void {
    this.getImagesByCarId(2);
  }

  getImagesByCarId(id: number) {
    this.imageService.getCarImagesByCar(id).subscribe(response => {
      this.image = response.data;
    })
  }
}
