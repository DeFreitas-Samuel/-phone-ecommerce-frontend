import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, delay, map, of, timer } from "rxjs";
import { CarouselItem } from "../interfaces/carouselItem.interface";

@Injectable({
    providedIn: 'root'
})

export class EcomConfigurator {

    constructor(private httpClient: HttpClient) {

    }

    getCarouselImages() {
        return this.test();
    }

    test(): Observable<CarouselItem[]> {


        return of([
            {
                imageUrl: 'http://localhost:8000/api/images/1.jpg',
                alt: 'Mac',
                linkToRedirect: 'test'
            },
            {
                imageUrl: 'http://localhost:8000/api/images/2.jpg',
                alt: 'Mac2',
                linkToRedirect: 'test2'
            },
            {
                imageUrl: 'http://localhost:8000/api/images/3.jpg',
                alt: 'Mac3',
                linkToRedirect: 'test3'
            }
        ])

    }
}