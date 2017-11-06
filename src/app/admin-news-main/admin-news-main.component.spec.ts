import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewsMainComponent } from './admin-news-main.component';

describe('AdminNewsMainComponent', () => {
  let component: AdminNewsMainComponent;
  let fixture: ComponentFixture<AdminNewsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNewsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNewsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
