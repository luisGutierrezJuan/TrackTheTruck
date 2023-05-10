import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dish-group',
  templateUrl: './dish-group.component.html',
  styleUrls: ['./dish-group.component.css']
})
export class DishGroupComponent {
  @Input() groupName: string = "";
  
}
