import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Userplandaily } from './userplandaily';

describe('Userplandaily', () => {
  let component: Userplandaily;
  let fixture: ComponentFixture<Userplandaily>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Userplandaily]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Userplandaily);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
