import { Component, Input, SimpleChanges } from '@angular/core'; 
import { DishData } from 'src/app/interfaces/dish.interface'
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items: DishData[] | undefined;
  total: number | undefined;
  order: any;
  

  constructor(private readonly orderService: OrderService) {
    
    
  }

  ngOnInit() {
    this.orderService.getOrder().subscribe(
      newOrder => this.order = newOrder
    );
  }
  
  removeItem(id: string): void{
    this.orderService.removeDish(id);
  }

  purchase(){

  }

  orderKeys(): any {
    if(this.order){
      return Object.keys(this.order);
    }
  }

  getTotal(): number {
    let total = 0;
    if(this.order){
      for (let key of this.orderKeys()){
        total += this.order[key].amount * this.order[key].price;
      }
    }
    return total;
  }
}
