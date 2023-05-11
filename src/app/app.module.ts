import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './pages/home/home.component';
import { RestaurantsComponent } from './pages/restaurants/restaurants.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CategoryFrameComponent } from './components/category-frame/category-frame.component';
import { DishComponent } from './components/dish/dish.component';
import { RestaurantTagComponent } from './components/restaurant-tag/restaurant-tag.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    RestaurantsComponent,
    ProfileComponent,
    CategoryFrameComponent,
    DishComponent,
    RestaurantTagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
