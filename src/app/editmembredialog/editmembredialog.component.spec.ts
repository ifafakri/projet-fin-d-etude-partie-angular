import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmembredialogComponent } from './editmembredialog.component';

describe('EditmembredialogComponent', () => {
  let component: EditmembredialogComponent;
  let fixture: ComponentFixture<EditmembredialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditmembredialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmembredialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
