import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IreportComponent } from './ireport.component';

describe('IreportComponent', () => {
  let component: IreportComponent;
  let fixture: ComponentFixture<IreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
