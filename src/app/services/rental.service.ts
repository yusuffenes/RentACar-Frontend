import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  makeRent(rental: Rental) {
    throw new Error('Method not implemented.');
  }

  apiUrl = "https://localhost:44390/api/Rentals/"

  constructor(private httpClient: HttpClient) { }

  getRentals():Observable<ListResponseModel<Rental>>{
    let newPath=this.apiUrl +"getrentaldetails";
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }

  addRental(rental:Rental):Observable<ResponseModel>{
    let newPath=this.apiUrl+"rulesforadding";
    return this.httpClient.post<ResponseModel>(newPath,rental);
  }
}
