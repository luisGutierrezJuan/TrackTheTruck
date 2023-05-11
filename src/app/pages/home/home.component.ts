import { Component, OnInit } from '@angular/core';
import { restaurant } from 'src/app/models/restaurant';
import { HourRange } from 'src/app/models/hourRange';
import { tagPosition } from 'src/app/models/tagPosition';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  allRestaurants: restaurant[] = [];

  constructor() {}

  ngOnInit(): void {

    this.createFoodTrucks();

  }

  createFoodTrucks(): void {
    const foodTrucks = [
      {
        name: 'Food Truck 1',
        puntuation: 4.5,
        image: 'https://link-a-la-imagen-1.com',
        schedule: new HourRange(9, 0, 17, 0),
        //position: {top: 10, left: 10}
      },
      {
        name: 'Food Truck 2',
        puntuation: 4.7,
        image: 'https://link-a-la-imagen-2.com',
        schedule: new HourRange(10, 30, 20, 30),
      },
      {
        name: 'Food Truck 1',
        puntuation: 4.5,
        image: 'https://link-a-la-imagen-1.com',
        schedule: new HourRange(9, 0, 17, 0),
      },
      {
        name: 'Food Truck 2',
        puntuation: 4.7,
        image: 'https://link-a-la-imagen-2.com',
        schedule: new HourRange(10, 30, 20, 30),
      },
      {
        name: 'Food Truck 3',
        puntuation: 4.8,
        image: 'https://link-a-la-imagen-3.com',
        schedule: new HourRange(11, 0, 19, 0),
      },
      {
        name: 'Food Truck 4',
        puntuation: 4.3,
        image: 'https://link-a-la-imagen-4.com',
        schedule: new HourRange(12, 0, 20, 0),
      },
      {
        name: 'Food Truck 5',
        puntuation: 4.6,
        image: 'https://link-a-la-imagen-5.com',
        schedule: new HourRange(10, 0, 18, 0),
      },
      {
        name: 'Food Truck 6',
        puntuation: 4.9,
        image: 'https://link-a-la-imagen-6.com',
        schedule: new HourRange(9, 30, 17, 30),
      },
      {
        name: 'Food Truck 7',
        puntuation: 4.4,
        image: 'https://link-a-la-imagen-7.com',
        schedule: new HourRange(8, 0, 16, 0),
      },
      {
        name: 'Food Truck 8',
        puntuation: 4.2,
        image: 'https://link-a-la-imagen-8.com',
        schedule: new HourRange(11, 30, 19, 30),
      },
      {
        name: 'Food Truck 9',
        puntuation: 4.0,
        image: 'https://link-a-la-imagen-9.com',
        schedule: new HourRange(10, 15, 18, 15),
      },
      {
        name: 'Food Truck 10',
        puntuation: 4.1,
        image: 'https://link-a-la-imagen-10.com',
        schedule: new HourRange(9, 45, 17, 45),
      },
      // Añade los demás food trucks aquí
    ];

    this.allRestaurants = foodTrucks;
  }


}
