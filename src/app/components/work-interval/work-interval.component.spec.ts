import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkIntervalComponent } from './work-interval.component';

describe('WorkIntervalComponent', () => {
  let component: WorkIntervalComponent;
  let fixture: ComponentFixture<WorkIntervalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkIntervalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkIntervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
