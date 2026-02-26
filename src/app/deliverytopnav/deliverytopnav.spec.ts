import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Deliverytopnav } from './deliverytopnav';

describe('Deliverytopnav', () => {
  let component: Deliverytopnav;
  let fixture: ComponentFixture<Deliverytopnav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Deliverytopnav]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Deliverytopnav);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
