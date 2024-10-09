import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodMenuListComponent } from './food-menu-list.component';

describe('FoodMenuListComponent', () => {
  let component: FoodMenuListComponent;
  let fixture: ComponentFixture<FoodMenuListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodMenuListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodMenuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
