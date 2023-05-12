import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  public cartVisibility: boolean = false;
  
  constructor(
    private readonly authService: AuthService, 
    private readonly router: Router
  ) {} 

  viewCart() {
    if (this.cartVisibility) this.cartVisibility = false;
    else this.cartVisibility = true;
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
