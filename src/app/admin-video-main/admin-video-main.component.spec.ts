import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVideoMainComponent } from './admin-video-main.component';

describe('AdminVideoMainComponent', () => {
  let component: AdminVideoMainComponent;
  let fixture: ComponentFixture<AdminVideoMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminVideoMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVideoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
