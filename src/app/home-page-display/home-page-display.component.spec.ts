import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageDisplayComponent } from './home-page-display.component';

describe('HomePageDisplayComponent', () => {
  let component: HomePageDisplayComponent;
  let fixture: ComponentFixture<HomePageDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
