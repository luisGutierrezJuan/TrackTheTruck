import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  public cartVisibility: boolean = false;
  public order: any;

  constructor(
    private readonly authService: AuthService, 
    private readonly orderService: OrderService,
    private readonly router: Router
  ){} 

  viewCart() {
    if (this.cartVisibility) this.cartVisibility = false;
    else this.cartVisibility = true;
    this.order = this.orderService.getOrder();
    console.log(this.order);
  }

  profile(){
    if (this.authService.isAuthenticated()){
      this.router.navigate(['/profile']);
    } else {
      console.log("pepe");
      this.router.navigate(['/login']);
    }
  }
}
