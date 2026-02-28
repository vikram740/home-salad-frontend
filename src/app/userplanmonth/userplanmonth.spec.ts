import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Userplanmonth } from './userplanmonth';

describe('Userplanmonth', () => {
  let component: Userplanmonth;
  let fixture: ComponentFixture<Userplanmonth>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Userplanmonth]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Userplanmonth);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
