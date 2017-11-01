import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pruduct1Component } from './pruduct1.component';

describe('Pruduct1Component', () => {
  let component: Pruduct1Component;
  let fixture: ComponentFixture<Pruduct1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pruduct1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pruduct1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
