/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EntraModoAutoComponent } from './entraModoAuto.component';

describe('EntraModoAutoComponent', () => {
  let component: EntraModoAutoComponent;
  let fixture: ComponentFixture<EntraModoAutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntraModoAutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntraModoAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
