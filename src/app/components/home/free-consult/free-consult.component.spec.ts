import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeConsultComponent } from './free-consult.component';

describe('FreeConsultComponent', () => {
  let component: FreeConsultComponent;
  let fixture: ComponentFixture<FreeConsultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeConsultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
