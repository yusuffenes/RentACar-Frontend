import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Payment } from 'src/app/models/payment';
import { PaymentService } from 'src/app/services/payment.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent {
  payAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private paymentService:PaymentService,
    private toastrService:ToastrService){}

  ngOnInit(): void {
    this.createPayAddForm();
  }

  createPayAddForm(){
    this.payAddForm=this.formBuilder.group({
      fullName: ['', Validators.required],
      cardNumber: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
      cvv: ['', [Validators.required, Validators.pattern('^[0-9]{3}$')]],
      month: ['', [Validators.required, Validators.pattern('^(0?[1-9]|1[0-2])$')]],
      year: ['', [Validators.required, Validators.pattern('^[0-9]{2}$')]]
    })
  }

  add(){
    if(this.payAddForm.valid){
      let pay:Payment=Object.assign({},this.payAddForm.value);
      this.paymentService.addPayments(pay).subscribe(response=>{
        this.toastrService.success(response.message,"Ödeme başarılı!");
      },
      responseError=>{
        console.log(responseError);
        if(responseError.error.message){
          this.toastrService.error(responseError.error.message,"Doğrulama hatası");
        }
      })
    }
    else{
      this.toastrService.error("Lütfen tüm alanları doldurun.","Hata!");
    }
  }
  formatCardNumber(event: any) {
    let input = event.target.value;
  // Sadece sayıları kabul et
  input = input.replace(/\D/g, '');
  // En fazla 16 karakteri kabul et
  if (input.length > 16) {
    input = input.slice(0, 16);
  }
  const cardNumberArray = [];
  for (let i = 0; i < input.length; i += 4) {
    cardNumberArray.push(input.slice(i, i + 4));
  }
  event.target.value = cardNumberArray.join(' ');
  }
  formatCvv(event: any) {
    let input = event.target.value;
    // Sadece sayıları kabul et
    input = input.replace(/\D/g, '');
    // En fazla 3 karakteri kabul et
    if (input.length > 3) {
      input = input.slice(0, 3);
    }
    event.target.value = input;
  }
  
}
