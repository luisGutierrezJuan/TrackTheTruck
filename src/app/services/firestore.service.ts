import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Restaurant } from '../interfaces/restaurant.interface';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

export class FirestoreService {
  private restaurant: Observable<Restaurant[]>;
  private restaurants: Restaurant[];

  constructor(private firestore: AngularFirestore) {
    this.restaurant = this.firestore.collection<Restaurant>('Restaurants').valueChanges();
    this.restaurant.subscribe((list: Restaurant[]) => {this.restaurants = list;});
  }

  getRestaurants(): Observable<Restaurant[]>{
    return this.restaurant;
  }

  getRestaurantByName(name: string): Restaurant{
    //list= this.firestore.collection('Restaurants').doc
    this.restaurant = this.firestore.collection<Restaurant>('Restaurants').valueChanges();
    this.restaurant.subscribe((list: Restaurant[]) => {this.restaurants = list;});
    //this.getRestaurants();
    console.log()
    for (let i=0; i < this.restaurants.length; i++){
      if (this.restaurants[i].name == name){
        return this.restaurants[i];
      }
    }
    return null;
  }

  saveRestaurant(restaurant: Restaurant){
    this.firestore.collection('Restaurants').add(restaurant);
  }
}