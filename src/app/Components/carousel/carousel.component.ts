import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { CarouselItem } from 'src/app/interfaces/carouselItem.interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy {

  @Input() carouselArray!: CarouselItem[];
  currentItem!: CarouselItem;
  currentIndex: number = 0; 
  carouselNextItemSubscription!: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.currentItem = this.carouselArray[this.currentIndex];
    this.carouselNextItemSubscription = interval(5000).subscribe(val => this.onRightClick());

  }
  ngOnDestroy(): void {
      this.carouselNextItemSubscription.unsubscribe();
  }

  onRightClick(){
    const carouselArrayLength = this.carouselArray.length;
    if(this.currentIndex >= carouselArrayLength-1){
      this.currentIndex = 0;
      this.currentItem = this.carouselArray[this.currentIndex];
    }
    else{
      this.currentIndex++;
      this.currentItem = this.carouselArray[this.currentIndex];
    }
  }

  onLeftClick(){
    const carouselArrayLength = this.carouselArray.length;
    if(this.currentIndex <= 0){
      this.currentIndex = carouselArrayLength-1;
      this.currentItem = this.carouselArray[this.currentIndex];
    }
    else{
      this.currentIndex--;
      this.currentItem = this.carouselArray[this.currentIndex];
    }
  }
}
