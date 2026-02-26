import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Admineditcustomer } from './admineditcustomer';

describe('Admineditcustomer', () => {
  let component: Admineditcustomer;
  let fixture: ComponentFixture<Admineditcustomer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Admineditcustomer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Admineditcustomer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
