import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Userplan } from './userplan';

describe('Userplan', () => {
  let component: Userplan;
  let fixture: ComponentFixture<Userplan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Userplan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Userplan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
