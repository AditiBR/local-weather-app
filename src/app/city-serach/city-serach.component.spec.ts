import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitySerachComponent } from './city-serach.component';

describe('CitySerachComponent', () => {
  let component: CitySerachComponent;
  let fixture: ComponentFixture<CitySerachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitySerachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitySerachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
