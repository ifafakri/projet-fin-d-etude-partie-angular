import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierPrsntationComponent } from './modifier-prsntation.component';

describe('ModifierPrsntationComponent', () => {
  let component: ModifierPrsntationComponent;
  let fixture: ComponentFixture<ModifierPrsntationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierPrsntationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierPrsntationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
