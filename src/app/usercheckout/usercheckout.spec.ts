import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Usercheckout } from './usercheckout';

describe('Usercheckout', () => {
  let component: Usercheckout;
  let fixture: ComponentFixture<Usercheckout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Usercheckout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Usercheckout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
