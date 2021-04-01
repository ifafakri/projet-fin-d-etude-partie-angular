import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletemembredialogComponent } from './deletemembredialog.component';

describe('DeletemembredialogComponent', () => {
  let component: DeletemembredialogComponent;
  let fixture: ComponentFixture<DeletemembredialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletemembredialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletemembredialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
