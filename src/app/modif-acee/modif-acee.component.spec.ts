import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifAceeComponent } from './modif-acee.component';

describe('ModifAceeComponent', () => {
  let component: ModifAceeComponent;
  let fixture: ComponentFixture<ModifAceeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifAceeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifAceeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
