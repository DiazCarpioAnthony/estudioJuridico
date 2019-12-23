import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorLoginComponent } from './administrador-login.component';

describe('AdministradorLoginComponent', () => {
  let component: AdministradorLoginComponent;
  let fixture: ComponentFixture<AdministradorLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministradorLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministradorLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
