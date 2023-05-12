import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './pages/home/home.component';
import { RestaurantsComponent } from './pages/restaurants/restaurants.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DishComponent } from './components/dish/dish.component';
import { RestaurantTagComponent } from './components/restaurant-tag/restaurant-tag.component';
import { FooterComponent } from './components/footer/footer.component';
import { DishGroupComponent } from './components/dish-group/dish-group.component';
import { CartComponent } from './components/cart/cart.component';
import { AuthService } from './services/auth.service';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule} from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'
import { environment } from 'src/environments/environment';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { FirestoreService } from './services/firestore.service';
import { OrderService } from './services/order.service';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    RestaurantsComponent,
    ProfileComponent,
    DishComponent,
    RestaurantTagComponent,
    DishComponent,
    FooterComponent,
    DishGroupComponent,
    RegisterComponent,
    LoginComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [
    AuthService,
    FirestoreService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
