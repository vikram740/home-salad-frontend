import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Usereditprofile } from './usereditprofile';

describe('Usereditprofile', () => {
  let component: Usereditprofile;
  let fixture: ComponentFixture<Usereditprofile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Usereditprofile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Usereditprofile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
