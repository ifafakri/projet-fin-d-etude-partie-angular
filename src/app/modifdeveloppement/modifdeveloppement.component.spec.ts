import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifdeveloppementComponent } from './modifdeveloppement.component';

describe('ModifdeveloppementComponent', () => {
  let component: ModifdeveloppementComponent;
  let fixture: ComponentFixture<ModifdeveloppementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifdeveloppementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifdeveloppementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
