import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private order: any;

  constructor() { }

  getOrder() {
    return this.order;
  }

  setOrder(newOrder: any) {
    this.order = newOrder;
  }
}
