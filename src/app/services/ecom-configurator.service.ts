import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, delay, map, of, timer } from "rxjs";
import { CarouselItem } from "../interfaces/carouselItem.interface";

@Injectable({
    providedIn: 'root'
})

export class EcomConfigurator {

    constructor(private httpClient: HttpClient){

    }

    getCarouselImages() {
        return this.test();
    }

    test(): Observable<CarouselItem[]> {

        return of([
            {imageUrl:'http://localhost:8000/api/images/1.jpg',
             alt:'Mac',
             linkToRedirect:'test'
            }
          ])


        // return timer(2000).pipe(
        //   map(() => ));
      }
}