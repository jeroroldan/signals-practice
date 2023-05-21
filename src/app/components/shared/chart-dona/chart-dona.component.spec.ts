import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartDonaComponent } from './chart-dona.component';

describe('ChartDonaComponent', () => {
  let component: ChartDonaComponent;
  let fixture: ComponentFixture<ChartDonaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartDonaComponent]
    });
    fixture = TestBed.createComponent(ChartDonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
