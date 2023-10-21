import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from 'src/app/models/carDetail';
import { Payment } from 'src/app/models/payment';
import { CartService } from 'src/app/services/cart.service';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  
  payments:Payment[]=[];
  dataLoaded=false;
  constructor(private paymentService:PaymentService){}
  
  ngOnInit(): void {
    this.getPayments();
  }

  getPayments(){
    this.paymentService.getPayments().subscribe((response)=>{
      this.payments=response.data;
      this.dataLoaded=true;
    })
  }

}
