import { Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
  private order: any = null;
  private orderSubject = new BehaviorSubject<any>(this.order);

  constructor() { }

  getOrder() {
    return this.orderSubject.asObservable();
  }

  setOrder(newOrder: any) {
    this.order = newOrder;
    this.orderSubject.next(this.order);
  }

  removeDish(id: string){
    delete this.order[id];
    this.orderSubject.next(this.order);
  }
}
