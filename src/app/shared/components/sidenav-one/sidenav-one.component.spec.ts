import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavOneComponent } from './sidenav-one.component';

describe('SidenavOneComponent', () => {
  let component: SidenavOneComponent;
  let fixture: ComponentFixture<SidenavOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
