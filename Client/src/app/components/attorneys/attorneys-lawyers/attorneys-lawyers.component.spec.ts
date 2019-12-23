import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttorneysLawyersComponent } from './attorneys-lawyers.component';

describe('AttorneysLawyersComponent', () => {
  let component: AttorneysLawyersComponent;
  let fixture: ComponentFixture<AttorneysLawyersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttorneysLawyersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttorneysLawyersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
