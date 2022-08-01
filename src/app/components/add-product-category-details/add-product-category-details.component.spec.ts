import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductCategoryDetailsComponent } from './add-product-category-details.component';

describe('AddProductCategoryDetailsComponent', () => {
  let component: AddProductCategoryDetailsComponent;
  let fixture: ComponentFixture<AddProductCategoryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductCategoryDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProductCategoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
