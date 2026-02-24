import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adminlogin1 } from './adminlogin1';

describe('Adminlogin1', () => {
  let component: Adminlogin1;
  let fixture: ComponentFixture<Adminlogin1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Adminlogin1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Adminlogin1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
