import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BureauExecutifComponent } from './bureau-executif.component';

describe('BureauExecutifComponent', () => {
  let component: BureauExecutifComponent;
  let fixture: ComponentFixture<BureauExecutifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BureauExecutifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BureauExecutifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
