import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CarouselItem } from 'src/app/interfaces/carouselItem.interface';
import { EcomConfigurator } from 'src/app/services/ecom-configurator.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  carousel$!: Observable<CarouselItem[]>

  constructor(private ecomConfigurator: EcomConfigurator) { }

  ngOnInit(): void {
    this.carousel$ = this.ecomConfigurator.getCarouselImages()
  }


}
