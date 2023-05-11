import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email!: string;
  password!: string;
  
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  onSubmit() {
    this.authService.login({email: this.email, password: this.password})
      .then(() => this.router.navigate(['/']));
  }
}
