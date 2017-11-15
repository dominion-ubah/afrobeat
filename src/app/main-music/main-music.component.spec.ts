import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMusicComponent } from './main-music.component';

describe('MainMusicComponent', () => {
  let component: MainMusicComponent;
  let fixture: ComponentFixture<MainMusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainMusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
