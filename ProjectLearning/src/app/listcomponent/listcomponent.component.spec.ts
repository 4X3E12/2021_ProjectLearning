import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListcomponentComponent } from './listcomponent.component';

describe('ListcomponentComponent', () => {
  let component: ListcomponentComponent;
  let fixture: ComponentFixture<ListcomponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
