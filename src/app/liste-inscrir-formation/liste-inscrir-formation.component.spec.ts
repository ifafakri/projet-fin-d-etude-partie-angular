import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeInscrirFormationComponent } from './liste-inscrir-formation.component';

describe('ListeInscrirFormationComponent', () => {
  let component: ListeInscrirFormationComponent;
  let fixture: ComponentFixture<ListeInscrirFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeInscrirFormationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeInscrirFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
