import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './pages/home/home.component';
import { RestaurantsComponent } from './pages/restaurants/restaurants.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule} from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { CartComponent } from './components/cart/cart.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    RestaurantsComponent,
    ProfileComponent,
    RegisterComponent,
    LoginComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
