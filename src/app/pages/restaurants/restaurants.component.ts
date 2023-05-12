import { Component, ChangeDetectorRef } from '@angular/core';
import { Dish } from 'src/app/interfaces/dish';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent {
  menu: {[category: string]: Dish[]} = {"Entrantes": [{id: "01", name:"Pan de ajo", description:"sencillamente imprescindible, si lo eliges con queso eres tonto", price: 2, photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI4XVfaxft5-sA0ACuHhaBtl_xB8KeL00LcQ&usqp=CAU"},
                                                      {id: "02", name:"Bruschetta", description:"ta bueno", price: 3, photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgDK29etDXIyvSsUnIHhh-9z3N6-QnhfZXsQ&usqp=CAU"}],
                                        "Pizzas": [{id: "03", name:"Pizza Hawaiana", description:"pizza con piña a nadie le gusta de verdad", price: 25, photo: "https://imagenes.20minutos.es/files/og_thumbnail/uploads/imagenes/2022/10/20/pizza.jpeg"},
                                        {id: "04", name:"Pizza Pepperoni", description:"en realidad se dice salami picante", price: 25, photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiFv62CPGwHXc-wbAlODNz_CjBoMr7fdKK0A&usqp=CAU"},
                                        {id: "05", name:"Pizza 4 quesos", description:"La pizza mas aburrida, parece que masticas cemento", price: 25, photo: "https://www.recetin.com/wp-content/uploads/2012/01/pizza_cuatro_quesos.jpg"}]};
  order: { [id: string]: {name: string, amount: number} } = {};


  constructor(private orderService: OrderService, private changeDetectorRef: ChangeDetectorRef) {}


  addDish(order: any, dish: any): void{
    if (dish.id in order){
      order[dish.id].amount++;
    }
    else{
      order[dish.id] = {name: dish.name, price: dish.price, amount: 1};
    }
  }

  removeDish(order: any, dish: any): void{
    if (order[dish.id].amount == 1){
      delete order[dish.id]; 
    }
    else {
      order[dish.id].amount--;
    } 
  }

  pushOrder(){
    this.orderService.setOrder(this.order);
    this.order = {};
  }
  
}
