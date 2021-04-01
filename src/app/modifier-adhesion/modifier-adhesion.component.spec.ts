import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierAdhesionComponent } from './modifier-adhesion.component';

describe('ModifierAdhesionComponent', () => {
  let component: ModifierAdhesionComponent;
  let fixture: ComponentFixture<ModifierAdhesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierAdhesionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierAdhesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
