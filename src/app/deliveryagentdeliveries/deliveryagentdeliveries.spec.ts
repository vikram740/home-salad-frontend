import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Deliveryagentdeliveries } from './deliveryagentdeliveries';

describe('Deliveryagentdeliveries', () => {
  let component: Deliveryagentdeliveries;
  let fixture: ComponentFixture<Deliveryagentdeliveries>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Deliveryagentdeliveries]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Deliveryagentdeliveries);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
