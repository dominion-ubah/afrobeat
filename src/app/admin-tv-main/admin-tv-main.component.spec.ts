import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTvMainComponent } from './admin-tv-main.component';

describe('AdminTvMainComponent', () => {
  let component: AdminTvMainComponent;
  let fixture: ComponentFixture<AdminTvMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTvMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTvMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
