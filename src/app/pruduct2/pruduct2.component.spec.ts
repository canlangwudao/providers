import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pruduct2Component } from './pruduct2.component';

describe('Pruduct2Component', () => {
  let component: Pruduct2Component;
  let fixture: ComponentFixture<Pruduct2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pruduct2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pruduct2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
