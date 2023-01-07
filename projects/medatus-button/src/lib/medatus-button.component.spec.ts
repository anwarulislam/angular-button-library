import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedatusButtonComponent } from './medatus-button.component';

describe('MedatusButtonComponent', () => {
  let component: MedatusButtonComponent;
  let fixture: ComponentFixture<MedatusButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedatusButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedatusButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
