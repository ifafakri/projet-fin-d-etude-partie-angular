import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifMediaComponent } from './modif-media.component';

describe('ModifMediaComponent', () => {
  let component: ModifMediaComponent;
  let fixture: ComponentFixture<ModifMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifMediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
