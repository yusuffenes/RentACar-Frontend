import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';
import { CarDetail } from '../models/car-detail';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  getCarDetailsByCarId(carId: number) {
    throw new Error('Method not implemented.');
  }

  apiUrl = "https://localhost:44390/api/Cars/"    ///enviorment

  constructor(private httpClient: HttpClient) { }
    getCar(): Observable<ListResponseModel<Car>> {
        return this.httpClient.get<ListResponseModel<Car>>(this.apiUrl + "getall");
    }

    getDetail(): Observable<ListResponseModel<CarDetail>> {
        return this.httpClient.get<ListResponseModel<CarDetail>>(this.apiUrl + "getcardetail");
    }

    getCarsByBrand(id: Number): Observable<ListResponseModel<CarDetail>> {
        return this.httpClient.get<ListResponseModel<CarDetail>>(this.apiUrl + "getbybrand?brandId=" + id);
    }

    getCarsByColor(id: Number): Observable<ListResponseModel<CarDetail>> {
        return this.httpClient.get<ListResponseModel<CarDetail>>(this.apiUrl + "getbycolor?colorId=" + id);
    }

    getCarsByCarId(id: Number): Observable<ListResponseModel<CarDetail>> {
        return this.httpClient.get<ListResponseModel<CarDetail>>(this.apiUrl + "getbyid?carId=" + id);
    }

}
