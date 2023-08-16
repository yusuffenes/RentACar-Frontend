import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  colors: Color[] = [];
  currentColor: Color | null;
  dataLoaded = false;

  constructor(private colorService: ColorService) {}

  ngOnInit(): void {
    this.getColors();
  }

  getColors() {
    this.colorService.getColors().subscribe(response => {
      this.colors = response.data;
      this.dataLoaded = true;
    });
  }

  setCurrentColor(color: Color | null) {
    this.currentColor = color;
  }

  getCurrentColorClass(color: Color): string {
    if (color === this.currentColor) {
      return "active";
    } else {
      return "";
    }
  }

  getAllColorClasses(): string {
    if (!this.currentColor) {
      return "active";
    } else {
      return "";
    }
  }

  unsetCurrentColor() {
    this.currentColor = null;
  }
}
