import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCelebMainComponent } from './admin-celeb-main.component';

describe('AdminCelebMainComponent', () => {
  let component: AdminCelebMainComponent;
  let fixture: ComponentFixture<AdminCelebMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCelebMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCelebMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
