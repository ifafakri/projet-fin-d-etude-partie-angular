import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterMembredialogComponent } from './ajouter-membredialog.component';

describe('AjouterMembredialogComponent', () => {
  let component: AjouterMembredialogComponent;
  let fixture: ComponentFixture<AjouterMembredialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterMembredialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterMembredialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
