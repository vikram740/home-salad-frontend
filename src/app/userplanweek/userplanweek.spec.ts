import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Userplanweek } from './userplanweek';

describe('Userplanweek', () => {
  let component: Userplanweek;
  let fixture: ComponentFixture<Userplanweek>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Userplanweek]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Userplanweek);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
