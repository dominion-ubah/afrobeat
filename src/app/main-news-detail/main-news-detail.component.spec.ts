import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNewsDetailComponent } from './main-news-detail.component';

describe('MainNewsDetailComponent', () => {
  let component: MainNewsDetailComponent;
  let fixture: ComponentFixture<MainNewsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainNewsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNewsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
