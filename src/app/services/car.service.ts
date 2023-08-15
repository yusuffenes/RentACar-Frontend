import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44390/api"    ///enviorment

  constructor(private httpClient: HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl+"/Cars/getcardetail"    ///let sadece burada gecerlidir.
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByBrand(id:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl+"/Cars/getbybrandid/?id="+id;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl+"/Cars/getbycolorid/?colorId="+colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }


}
