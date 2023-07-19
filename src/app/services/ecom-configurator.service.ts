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
                imageUrl: 'https://phone-ecommerce-api-production.up.railway.app/api/images/MacbookAd.jpg',
                alt: 'MacBook Pro Ad',
                linkToRedirect: 'https://bytebazaar-7de1b.web.app/product/1'
            },
            {
                imageUrl: 'https://phone-ecommerce-api-production.up.railway.app/api/images/GalaxyBookAd.jpg',
                alt: 'Galaxy Book Ad',
                linkToRedirect: 'https://bytebazaar-7de1b.web.app/product/2'
            },
            {
                imageUrl: 'https://phone-ecommerce-api-production.up.railway.app/api/images/InspironAd.jpg',
                alt: 'Inspiron Desktop Ad',
                linkToRedirect: 'https://bytebazaar-7de1b.web.app/product/3'
            }
        ])

    }
}