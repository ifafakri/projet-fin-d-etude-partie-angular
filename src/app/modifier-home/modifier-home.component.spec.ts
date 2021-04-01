import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierHomeComponent } from './modifier-home.component';

describe('ModifierHomeComponent', () => {
  let component: ModifierHomeComponent;
  let fixture: ComponentFixture<ModifierHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
