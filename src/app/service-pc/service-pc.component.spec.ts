import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePcComponent } from './service-pc.component';

describe('ServicePcComponent', () => {
  let component: ServicePcComponent;
  let fixture: ComponentFixture<ServicePcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicePcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicePcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
