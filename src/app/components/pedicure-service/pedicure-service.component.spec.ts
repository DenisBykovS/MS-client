import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedicureServiceComponent } from './pedicure-service.component';

describe('PedicureServiceComponent', () => {
  let component: PedicureServiceComponent;
  let fixture: ComponentFixture<PedicureServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedicureServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedicureServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
