import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pentatonics',
  templateUrl: './pentatonics.component.html',
  styleUrls: ['./pentatonics.component.scss']
})
export class PentatonicsComponent implements OnInit {

  slider: any
  defaultTransform: any

  goNext() {
    this.defaultTransform = this.defaultTransform - 500;
    if (Math.abs(this.defaultTransform) >= this.slider.scrollWidth / 1.37) this.defaultTransform = 0;
    this.slider.style.transform = "translateX(" + this.defaultTransform + "px)";
  }
  goPrev() {
    if (Math.abs(this.defaultTransform) === 0) this.defaultTransform = 0;
    else if (this.defaultTransform < 10) {
      this.defaultTransform = this.defaultTransform + 208;
    }
    this.slider.style.transform = "translateX(" + this.defaultTransform + "px)";
  }

  constructor() { }

  ngOnInit(): void {
    this.slider = document.getElementById("slider");
    this.defaultTransform = 0
  }
}