import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent {
  @Input() dishName: string=""
  @Input() dishPrice: string=""
  @Input() dishDescription: string=""
  @Input() dishPhoto: string=""
}
