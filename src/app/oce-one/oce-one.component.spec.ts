import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OceOneComponent } from './oce-one.component';

describe('OceOneComponent', () => {
  let component: OceOneComponent;
  let fixture: ComponentFixture<OceOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OceOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OceOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
