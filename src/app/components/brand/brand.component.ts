import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {


  brands:Brand[]=[];

  currentBrand:Brand|null;
  
  dataLoaded=false;


  constructor(private brandService: BrandService) {};
  

  ngOnInit(): void {
    this.getBrand();
  }


  getBrand() {
    this.brandService.getBrands().subscribe(response=>{
      this.brands=response.data
      this.dataLoaded=true
    })
  }

  setCurrentBrand(brand:Brand|null) {
    this.currentBrand = brand;
  }

  getCurrentBrandClass(brand:Brand){
    if(brand==this.currentBrand){
      return "active";
    }
    else{
      return "";
    }
  }
  getAllBrandClasses(): string {
    if (!this.currentBrand) {
      return "active"; // Eğer herhangi bir marka seçili değilse, işaretlemeyi uygula
    } else {
      return ""; // Eğer bir marka seçiliyse, işaretlemeyi kaldır
    }
  }
  
  getStatusInfo(status: boolean): boolean {
    return !this.currentBrand;
  }

  unsetCurrentBrand() {
    this.currentBrand = null;
  }
  

}


