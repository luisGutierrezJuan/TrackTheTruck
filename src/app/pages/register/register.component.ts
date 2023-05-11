import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email!: string;
  password!: string;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  onSubmit() {
    this.authService.register({email: this.email, password: this.password}).then(() => this.router.navigate(['/']));
  }
}
