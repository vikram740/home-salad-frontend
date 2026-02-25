import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Userfailure } from './userfailure';

describe('Userfailure', () => {
  let component: Userfailure;
  let fixture: ComponentFixture<Userfailure>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Userfailure]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Userfailure);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
