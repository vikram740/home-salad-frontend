import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Deliveryagentlogin } from './deliveryagentlogin';

describe('Deliveryagentlogin', () => {
  let component: Deliveryagentlogin;
  let fixture: ComponentFixture<Deliveryagentlogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Deliveryagentlogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Deliveryagentlogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
