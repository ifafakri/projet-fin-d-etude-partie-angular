import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceeComponent } from './accee.component';

describe('AcceeComponent', () => {
  let component: AcceeComponent;
  let fixture: ComponentFixture<AcceeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
