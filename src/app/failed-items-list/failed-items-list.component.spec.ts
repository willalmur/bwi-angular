import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailedItemsListComponent } from './failed-items-list.component';

describe('FailedItemsListComponent', () => {
  let component: FailedItemsListComponent;
  let fixture: ComponentFixture<FailedItemsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FailedItemsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FailedItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
