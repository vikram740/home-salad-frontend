import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adminviewcustomer } from './adminviewcustomer';

describe('Adminviewcustomer', () => {
  let component: Adminviewcustomer;
  let fixture: ComponentFixture<Adminviewcustomer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Adminviewcustomer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Adminviewcustomer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
