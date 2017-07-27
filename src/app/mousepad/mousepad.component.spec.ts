/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MousepadComponent } from './mousepad.component';

describe('MousepadComponent', () => {
  let component: MousepadComponent;
  let fixture: ComponentFixture<MousepadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MousepadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MousepadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
