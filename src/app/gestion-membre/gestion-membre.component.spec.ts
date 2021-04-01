import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionMembreComponent } from './gestion-membre.component';

describe('GestionMembreComponent', () => {
  let component: GestionMembreComponent;
  let fixture: ComponentFixture<GestionMembreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionMembreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionMembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
