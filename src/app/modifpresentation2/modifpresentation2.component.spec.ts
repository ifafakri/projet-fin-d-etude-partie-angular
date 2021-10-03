import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modifpresentation2Component } from './modifpresentation2.component';

describe('Modifpresentation2Component', () => {
  let component: Modifpresentation2Component;
  let fixture: ComponentFixture<Modifpresentation2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Modifpresentation2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Modifpresentation2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
