import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantTagComponent } from './restaurant-tag.component';

describe('RestaurantTagComponent', () => {
  let component: RestaurantTagComponent;
  let fixture: ComponentFixture<RestaurantTagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantTagComponent]
    });
    fixture = TestBed.createComponent(RestaurantTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
