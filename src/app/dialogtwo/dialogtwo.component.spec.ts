import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogtwoComponent } from './dialogtwo.component';

describe('DialogtwoComponent', () => {
  let component: DialogtwoComponent;
  let fixture: ComponentFixture<DialogtwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogtwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
