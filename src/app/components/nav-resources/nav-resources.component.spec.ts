import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavResourcesComponent } from './nav-resources.component';

describe('NavResourcesComponent', () => {
  let component: NavResourcesComponent;
  let fixture: ComponentFixture<NavResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavResourcesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
