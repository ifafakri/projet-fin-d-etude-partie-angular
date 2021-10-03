import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerecrutementComponent } from './listerecrutement.component';

describe('ListerecrutementComponent', () => {
  let component: ListerecrutementComponent;
  let fixture: ComponentFixture<ListerecrutementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListerecrutementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerecrutementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
