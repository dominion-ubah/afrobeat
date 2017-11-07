import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewsCategoryComponent } from './admin-news-category.component';

describe('AdminNewsMainComponent', () => {
  let component: AdminNewsCategoryComponent;
  let fixture: ComponentFixture<AdminNewsCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNewsCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNewsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
