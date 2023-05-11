import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent {
  @Input() dish: any;
  @Input() order: any;
  @Input() addDish: Function;
  @Input() removeDish: Function;
  amount: number = 0;
  

  incrementAmount(): void{
    if(this.amount <= 15){
      this.amount++;
      this.addDish(this.order, this.dish)
    }
  }

  decrementAmount(): void{
    if(this.amount > 0){
      this.amount--;
      this.removeDish(this.order, this.dish)
    }
  }
}
