import { Component, Input, OnInit } from '@angular/core';
import { CarouselItem } from 'src/app/interfaces/carouselItem.interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() carouselArray!: CarouselItem[];
  currentItem: CarouselItem = this.carouselArray[0];
  currentIndex: number = 0; 

  constructor() { }

  ngOnInit(): void {
  
  }

}
