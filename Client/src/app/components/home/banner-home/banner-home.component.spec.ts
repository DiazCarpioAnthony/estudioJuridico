import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerHomeComponent } from './banner-home.component';

describe('BannerComponent', () => {
  let component: BannerHomeComponent;
  let fixture: ComponentFixture<BannerHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
