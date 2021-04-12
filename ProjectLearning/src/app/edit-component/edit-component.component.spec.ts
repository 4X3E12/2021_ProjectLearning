import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditComponentComponent } from './edit-component.component';

describe('EditComponentComponent', () => {
  let component: EditComponentComponent;
  let fixture: ComponentFixture<EditComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
