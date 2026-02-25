import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Usersuccess } from './usersuccess';

describe('Usersuccess', () => {
  let component: Usersuccess;
  let fixture: ComponentFixture<Usersuccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Usersuccess]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Usersuccess);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
