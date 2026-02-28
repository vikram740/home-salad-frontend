import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Usercustomizeplanmonth } from './usercustomizeplanmonth';

describe('Usercustomizeplanmonth', () => {
  let component: Usercustomizeplanmonth;
  let fixture: ComponentFixture<Usercustomizeplanmonth>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Usercustomizeplanmonth]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Usercustomizeplanmonth);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
