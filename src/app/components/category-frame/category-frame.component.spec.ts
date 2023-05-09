import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryFrameComponent } from './category-frame.component';

describe('CategoryFrameComponent', () => {
  let component: CategoryFrameComponent;
  let fixture: ComponentFixture<CategoryFrameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryFrameComponent]
    });
    fixture = TestBed.createComponent(CategoryFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
