import { Component, Input } from '@angular/core'; 
import { DishData } from 'src/app/interfaces/dish.interface'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items: DishData[] | undefined;
  total: number | undefined;

  constructor() {

  }
  
  removeItem(item: DishData){

  }

  purchase(){

  }
}
