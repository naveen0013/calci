import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquateComponent } from './equate.component';

describe('EquateComponent', () => {
  let component: EquateComponent;
  let fixture: ComponentFixture<EquateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
