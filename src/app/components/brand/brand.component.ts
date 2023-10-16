import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import {empty, filter} from 'rxjs';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands: Brand[] = [];
  selectedBrand: any;
  filteredBrand: any[] = [];


  constructor(private brandService: BrandService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      const id = +params['id']; // URL'den "id" parametresini alın
      if (id) {
        this.selectedBrand = id;
        this.filterBrand();
      }
    });

    this.getBrands();
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
      this.filteredBrand = this.brands; // Tüm arabaları başlangıçta göster
    });
  }

  filterBrand() {
    if (this.selectedBrand) {
      this.filteredBrand = this.brands.filter((brand) => brand.id === this.selectedBrand);
    } else {
      this.filteredBrand = this.brands;
    }
  }
 
}


