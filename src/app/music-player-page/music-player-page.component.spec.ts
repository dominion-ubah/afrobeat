import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicPlayerPageComponent } from './music-player-page.component';

describe('MusicPlayerPageComponent', () => {
  let component: MusicPlayerPageComponent;
  let fixture: ComponentFixture<MusicPlayerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicPlayerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicPlayerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
