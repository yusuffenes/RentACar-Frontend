import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  colors: Color[] = [];
  currentColor:any;
  selectedColor:any;
  filteredColor:any[]=[];
  filterText="";
  colorLoaded: boolean = false;

  constructor(private colorService: ColorService, private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id']; // URL'den "id" parametresini alın
      if (id) {
        this.selectedColor = id;
        this.filterColor();
      }
    });
    this.getColors();
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
      this.colorLoaded = true;
      this.filteredColor = this.colors;
    })
  }

  filterColor(){
    if(this.selectedColor){
      this.filteredColor=this.colors.filter((brand) => brand.id===this.selectedColor)
    }
  }
  
}
