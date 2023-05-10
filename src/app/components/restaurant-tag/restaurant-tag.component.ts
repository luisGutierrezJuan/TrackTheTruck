import { Component, Input } from '@angular/core';
import { Hora } from 'src/app/models/hora';

@Component({
  selector: 'app-restaurant-tag',
  templateUrl: './restaurant-tag.component.html',
  styleUrls: ['./restaurant-tag.component.css']
})
export class RestaurantTagComponent {

  @Input() name: string = "";
  @Input() puntuation: number = 0;
  @Input() image: string = "";
  @Input() hora: Hora = new Hora(0, 0);


  constructor() { }
  
}
