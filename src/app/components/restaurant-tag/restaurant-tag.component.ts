import { Component, Input } from '@angular/core';
import { Restaurant } from 'src/app/interfaces/restaurant.interface';

@Component({
  selector: 'app-restaurant-tag',
  templateUrl: './restaurant-tag.component.html',
  styleUrls: ['./restaurant-tag.component.css']
})
export class RestaurantTagComponent {

  @Input() Name: string = "Restaurante";
  @Input() Assesment: number = 0;
  @Input() Photo: string = "https://restauracionnews.com/wp-content/uploads/2020/09/Food-Truck-IceCoBar-en-Jerez-de-la-Frontera.jpg";
  @Input() Schedule: string;

  constructor() { }

}