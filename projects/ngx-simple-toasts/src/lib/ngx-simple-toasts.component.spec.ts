import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSimpleToastsComponent } from './ngx-simple-toasts.component';

describe('NgxSimpleToastsComponent', () => {
  let component: NgxSimpleToastsComponent;
  let fixture: ComponentFixture<NgxSimpleToastsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxSimpleToastsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSimpleToastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
