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
  @Input() interval: number = 6000;
  currentItem!: CarouselItem;
  currentIndex: number = 0; 
  carouselNextItemSubscription!: Subscription | null;

  constructor() { }





  ngOnInit(): void {
    this.currentItem = this.carouselArray[this.currentIndex];
    this.intervalStart(this.interval);

  }
  ngOnDestroy(): void {
      this.intervalStop()
  }

  intervalStart(intervalTime: number){
    this.intervalStop()
    this.carouselNextItemSubscription = interval(intervalTime).subscribe(()=>this.nextImage())
  }

  intervalStop(){
    if(this.carouselNextItemSubscription){
      this.carouselNextItemSubscription.unsubscribe()
      this.carouselNextItemSubscription = null;
    }
  }

  nextImage(){
    const carouselArrayLengthZeroIndexed = this.carouselArray.length -1;
    if(this.currentIndex >= carouselArrayLengthZeroIndexed){
      this.currentIndex = 0;
      this.currentItem = this.carouselArray[this.currentIndex];
      this.intervalStart(this.interval);
    }
    else{
      this.currentIndex++;
      this.currentItem = this.carouselArray[this.currentIndex];
      this.intervalStart(this.interval);
    }
  }

  previousImage(){
    const carouselArrayLength = this.carouselArray.length;
    if(this.currentIndex <= 0){
      this.currentIndex = carouselArrayLength-1;
      this.currentItem = this.carouselArray[this.currentIndex];
      this.intervalStart(this.interval);
    }
    else{
      this.currentIndex--;
      this.currentItem = this.carouselArray[this.currentIndex];
      this.intervalStart(this.interval);
    }
  }
}
