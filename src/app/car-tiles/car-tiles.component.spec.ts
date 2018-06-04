import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTilesComponent } from './car-tiles.component';

describe('CarTilesComponent', () => {
  let component: CarTilesComponent;
  let fixture: ComponentFixture<CarTilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarTilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
