import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreshSuccessComponent } from './refresh-success.component';

describe('RefreshSuccessComponent', () => {
  let component: RefreshSuccessComponent;
  let fixture: ComponentFixture<RefreshSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefreshSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefreshSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
