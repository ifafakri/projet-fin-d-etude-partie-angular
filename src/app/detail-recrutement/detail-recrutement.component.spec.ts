import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRecrutementComponent } from './detail-recrutement.component';

describe('DetailRecrutementComponent', () => {
  let component: DetailRecrutementComponent;
  let fixture: ComponentFixture<DetailRecrutementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailRecrutementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailRecrutementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
