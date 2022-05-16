/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MainChordsComponent } from './main-chords.component';

describe('MainChordsComponent', () => {
  let component: MainChordsComponent;
  let fixture: ComponentFixture<MainChordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainChordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainChordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
