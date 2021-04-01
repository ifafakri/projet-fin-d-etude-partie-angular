import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifPartenairComponent } from './modif-partenair.component';

describe('ModifPartenairComponent', () => {
  let component: ModifPartenairComponent;
  let fixture: ComponentFixture<ModifPartenairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifPartenairComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifPartenairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
