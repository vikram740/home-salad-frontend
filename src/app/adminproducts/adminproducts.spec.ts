import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adminproducts } from './adminproducts';

describe('Adminproducts', () => {
  let component: Adminproducts;
  let fixture: ComponentFixture<Adminproducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Adminproducts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Adminproducts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
