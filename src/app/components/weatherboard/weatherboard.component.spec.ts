import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherboardComponent } from './weatherboard.component';

describe('WeatherboardComponent', () => {
  let component: WeatherboardComponent;
  let fixture: ComponentFixture<WeatherboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
