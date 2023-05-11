import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  logOut() {
    this.authService.logout().then(() => this.router.navigate(['/']));
  }
}
