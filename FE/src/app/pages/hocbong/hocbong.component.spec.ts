import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HocbongComponent } from './hocbong.component';

describe('HocbongComponent', () => {
  let component: HocbongComponent;
  let fixture: ComponentFixture<HocbongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HocbongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HocbongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
