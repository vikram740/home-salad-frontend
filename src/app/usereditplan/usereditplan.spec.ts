import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Usereditplan } from './usereditplan';

describe('Usereditplan', () => {
  let component: Usereditplan;
  let fixture: ComponentFixture<Usereditplan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Usereditplan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Usereditplan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
