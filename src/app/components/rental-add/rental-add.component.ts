import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Rental } from 'src/app/models/rental';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental-add',
  templateUrl: './rental-add.component.html',
  styleUrls: ['./rental-add.component.css']
})
export class RentalAddComponent {
  rentalAddForm:FormGroup;
  constructor(
    private rentalService: RentalService,
    private toastrService: ToastrService,
    private router:Router,
    private formBuilder:FormBuilder
  ) {}
  ngOnInit(): void {
    this.createRentalAddForm();
  }

  createRentalAddForm(){
    this.rentalAddForm=this.formBuilder.group({
      carId:["",Validators.required],
      rentDate:["",Validators.required],
      returnDate:["",Validators.required],
      customerId:["",Validators.required]
    })
  }

  add(){
    if(this.rentalAddForm.valid){
      let rental:Rental=Object.assign({},this.rentalAddForm.value);
      this.rentalService.addRental(rental).subscribe((response)=>{
        this.toastrService.success(response.message,"Başarılı!Ödeme sayfasına yönlendiriliyorsunuz");
        this.router.navigate(['/payment/pay'])
      },
      responseError=>{
        console.log(responseError.error.message);
        
        if(responseError){
          this.toastrService.error(responseError.error.message,"Doğrulama hatası");
        }

      }

      )
    }else{
      
      this.toastrService.error("Lütfen tüm alanları doldurunuz!","Hata!");
    }
  }

}
