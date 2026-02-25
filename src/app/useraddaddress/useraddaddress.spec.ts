import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Useraddaddress } from './useraddaddress';

describe('Useraddaddress', () => {
  let component: Useraddaddress;
  let fixture: ComponentFixture<Useraddaddress>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Useraddaddress]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Useraddaddress);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
