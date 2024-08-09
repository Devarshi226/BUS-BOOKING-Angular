import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusSearchDataComponent } from './bus-search-data.component';

describe('BusSearchDataComponent', () => {
  let component: BusSearchDataComponent;
  let fixture: ComponentFixture<BusSearchDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusSearchDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusSearchDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
