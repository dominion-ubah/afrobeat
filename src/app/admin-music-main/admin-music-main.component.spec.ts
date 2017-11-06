import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMusicMainComponent } from './admin-music-main.component';

describe('AdminMusicMainComponent', () => {
  let component: AdminMusicMainComponent;
  let fixture: ComponentFixture<AdminMusicMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMusicMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMusicMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
