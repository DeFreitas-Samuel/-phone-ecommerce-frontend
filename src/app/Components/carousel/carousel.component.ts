import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription, interval, of, switchMap, takeUntil, tap } from 'rxjs';
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
  public currentIndex: number = 0;

  private readonly destroyer$ = new Subject<void>();

  constructor() { }

  ngOnInit(): void {
    this.bootstrap();
  }

  private bootstrap() {
    this.currentItem = this.carouselArray[this.currentIndex];
    this.intervalStart(this.interval);
  }

  ngOnDestroy(): void {
    this.destroyer$.next();
    this.destroyer$.complete();
  }

  intervalStart(intervalTime: number) {

    interval(intervalTime)
      .pipe(
        takeUntil( this.destroyer$ ),
        tap(() => this.nextImage())
      )
      .subscribe()

     /*const c$ =  of([1])
      .pipe(

      )
      .subscribe(console.log)

      const a = [1,2,3,4];

      const n = a.filter((n) => n > 2)
        .map(n => n * 2)
        .reduce((acc,val) => acc+ val, 0)*/
  }

  // pipe(...args:Array<Function>) {
  //   return args.reduce((acc, val) => {
  //     return val(acc)
  //   }, 0 )
  // }

  // intervalStop(){
  //   if(this.carouselNextItemSubscription){
  //     this.carouselNextItemSubscription.unsubscribe()
  //     this.carouselNextItemSubscription = null;
  //   }
  // }

  nextImage() {
    const carouselArrayLengthZeroIndexed = this.carouselArray.length - 1;
    if (this.currentIndex >= carouselArrayLengthZeroIndexed) {
      this.currentIndex = 0;
      this.currentItem = this.carouselArray[this.currentIndex];
      this.restartCarousel();
    }
    else {
      this.currentIndex++;
      this.currentItem = this.carouselArray[this.currentIndex];
      this.restartCarousel();
    }
  }

  previousImage() {
    const carouselArrayLength = this.carouselArray.length;
    if (this.currentIndex <= 0) {
      this.currentIndex = carouselArrayLength - 1;
      this.currentItem = this.carouselArray[this.currentIndex];
      this.restartCarousel();
    }
    else {
      this.currentIndex--;
      this.currentItem = this.carouselArray[this.currentIndex];
      this.restartCarousel();
    }
  }

  private restartCarousel() {
    this.destroyer$.next();
    this.intervalStart(this.interval);
  }

  changeSlide(index: number){
    this.currentIndex = index;
    this.currentItem = this.carouselArray[this.currentIndex];
    this.restartCarousel();
  }
}
