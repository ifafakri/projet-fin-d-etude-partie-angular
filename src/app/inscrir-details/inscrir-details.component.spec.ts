import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscrirDetailsComponent } from './inscrir-details.component';

describe('InscrirDetailsComponent', () => {
  let component: InscrirDetailsComponent;
  let fixture: ComponentFixture<InscrirDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscrirDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscrirDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
