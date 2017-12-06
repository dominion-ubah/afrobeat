import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTvComponent } from './main-tv.component';

describe('MainTvComponent', () => {
  let component: MainTvComponent;
  let fixture: ComponentFixture<MainTvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainTvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
