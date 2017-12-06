import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCelebsComponent } from './main-celebs.component';

describe('MainCelebsComponent', () => {
  let component: MainCelebsComponent;
  let fixture: ComponentFixture<MainCelebsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCelebsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCelebsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
