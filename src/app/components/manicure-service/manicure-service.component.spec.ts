import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManicureServiceComponent } from './manicure-service.component';

describe('ManicureServiceComponent', () => {
  let component: ManicureServiceComponent;
  let fixture: ComponentFixture<ManicureServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManicureServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManicureServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
