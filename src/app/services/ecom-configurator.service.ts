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
                imageUrl: 'http://localhost:8000/api/images/MacbookAd.jpg',
                alt: 'MacBook Pro Ad',
                linkToRedirect: 'http://localhost:4200/product/1'
            },
            {
                imageUrl: 'http://localhost:8000/api/images/GalaxyBookAd.jpg',
                alt: 'Galaxy Book Ad',
                linkToRedirect: 'http://localhost:4200/product/2'
            },
            {
                imageUrl: 'http://localhost:8000/api/images/InspironAd.jpg',
                alt: 'Inspiron Desktop Ad',
                linkToRedirect: 'http://localhost:4200/product/3'
            }
        ])

    }
}