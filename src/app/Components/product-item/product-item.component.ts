import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() id!: number;
  @Input()  name: string ="";
  @Input()  price: string ="";
  @Input() imageUrl: string = "";

  constructor() { }

  ngOnInit(): void {

  }

}
