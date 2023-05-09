import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-frame',
  
  templateUrl: './category-frame.component.html',
  styleUrls: ['./category-frame.component.css']
})
export class CategoryFrameComponent {
  @Input() category: string = "";
  
}
