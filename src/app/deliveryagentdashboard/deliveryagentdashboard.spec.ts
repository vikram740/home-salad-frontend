import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Deliveryagentdashboard } from './deliveryagentdashboard';

describe('Deliveryagentdashboard', () => {
  let component: Deliveryagentdashboard;
  let fixture: ComponentFixture<Deliveryagentdashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Deliveryagentdashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Deliveryagentdashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
