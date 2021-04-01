import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierHistoriqueComponent } from './modifier-historique.component';

describe('ModifierHistoriqueComponent', () => {
  let component: ModifierHistoriqueComponent;
  let fixture: ComponentFixture<ModifierHistoriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierHistoriqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierHistoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
