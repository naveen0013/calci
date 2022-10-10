import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultHereComponent } from './result-here.component';

describe('ResultHereComponent', () => {
  let component: ResultHereComponent;
  let fixture: ComponentFixture<ResultHereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultHereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultHereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
