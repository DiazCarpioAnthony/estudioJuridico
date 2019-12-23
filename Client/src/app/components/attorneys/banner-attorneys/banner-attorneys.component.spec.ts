import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerAttorneysComponent } from './banner-attorneys.component';

describe('BannerAttorneysComponent', () => {
  let component: BannerAttorneysComponent;
  let fixture: ComponentFixture<BannerAttorneysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerAttorneysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerAttorneysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
