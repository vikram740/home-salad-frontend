import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Usercustomizeplanweek } from './usercustomizeplanweek';

describe('Usercustomizeplanweek', () => {
  let component: Usercustomizeplanweek;
  let fixture: ComponentFixture<Usercustomizeplanweek>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Usercustomizeplanweek]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Usercustomizeplanweek);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
