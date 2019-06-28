import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentNavbarComponent } from './department-navbar.component';

describe('DepartmentNavbarComponent', () => {
  let component: DepartmentNavbarComponent;
  let fixture: ComponentFixture<DepartmentNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
