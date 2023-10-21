import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';
import { ListResponseModel } from '../models/listResponseModel';
import { Payment } from '../models/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  constructor(private httpClient: HttpClient) {}
  apiUrl = 'https://localhost:44390/api/Payments/';

  getPayments():Observable<ListResponseModel<Payment>>{
    let newPath=this.apiUrl +"getall";
    return this.httpClient.get<ListResponseModel<Payment>>(newPath);
  }

  addPayments(payment:Payment):Observable<ResponseModel>{
    let newPath=this.apiUrl +"add";
    return this.httpClient.post<ResponseModel>(newPath,payment);
  }

}
