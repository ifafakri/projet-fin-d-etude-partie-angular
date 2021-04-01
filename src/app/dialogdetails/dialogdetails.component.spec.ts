import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogdetailsComponent } from './dialogdetails.component';

describe('DialogdetailsComponent', () => {
  let component: DialogdetailsComponent;
  let fixture: ComponentFixture<DialogdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
