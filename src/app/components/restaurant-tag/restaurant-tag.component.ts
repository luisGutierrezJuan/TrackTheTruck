import { Component, Input } from '@angular/core';
import { HourRange } from 'src/app/models/hourRange';
import { tagPosition } from 'src/app/models/tagPosition';

@Component({
  selector: 'app-restaurant-tag',
  templateUrl: './restaurant-tag.component.html',
  styleUrls: ['./restaurant-tag.component.css']
})
export class RestaurantTagComponent {

  @Input() name: string = "Restaurante";
  @Input() puntuation: number = 0;
  @Input() image: string = "https://restauracionnews.com/wp-content/uploads/2020/09/Food-Truck-IceCoBar-en-Jerez-de-la-Frontera.jpg";
  @Input() schedule: HourRange = new HourRange(0, 0, 0, 0);
  @Input() position: tagPosition = {top: 0, left: 0};

  constructor() { }
  
}