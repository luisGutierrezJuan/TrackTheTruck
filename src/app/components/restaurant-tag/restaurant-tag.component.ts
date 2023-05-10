import { Component, Input } from '@angular/core';
import { Hora } from 'src/app/models/hora';
import { tagPosition } from 'src/app/models/tagPosition';

@Component({
  selector: 'app-restaurant-tag',
  templateUrl: './restaurant-tag.component.html',
  styleUrls: ['./restaurant-tag.component.css']
})
export class RestaurantTagComponent {

  @Input() name: string = "Restaurante";
  @Input() puntuation: number = 0;
  @Input() image: string = "";
  @Input() hora: Hora = new Hora(0, 0);
  @Input() position: tagPosition = {width: 0, height: 0, top: 0, left: 0};

  constructor() { }
  
}
