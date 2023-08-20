import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';
import { CarDetail } from '../models/carDetail';
import { ResponseModel } from '../models/responseModel';
import { ApiUrl } from './serviceConstants';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = ApiUrl + "Cars/"; ///enviorment

  constructor(private httpClient: HttpClient) { }

  getCar(): Observable<ListResponseModel<Car>> {
    return this.httpClient.get<ListResponseModel<Car>>(this.apiUrl + "getall");
  }

  getDetail(): Observable<ListResponseModel<CarDetail>> {
    return this.httpClient.get<ListResponseModel<CarDetail>>(this.apiUrl + "getcardetail");
  }

  getCarsByBrand(brandId: Number): Observable<ListResponseModel<CarDetail>> {
    return this.httpClient.get<ListResponseModel<CarDetail>>(this.apiUrl + "getbybrand?brandId=" + brandId);
  }

  getCarsByColor(colorId: Number): Observable<ListResponseModel<CarDetail>> {
    return this.httpClient.get<ListResponseModel<CarDetail>>(this.apiUrl + "getbycolor?colorId=" + colorId);
  }
  
  getCarsByCarId(id: Number): Observable<ListResponseModel<CarDetail>> {
    return this.httpClient.get<ListResponseModel<CarDetail>>(this.apiUrl + "getbyid?carId=" + id);
  }
}
