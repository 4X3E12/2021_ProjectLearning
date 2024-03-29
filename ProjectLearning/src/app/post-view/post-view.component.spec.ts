import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PostViewComponent } from './post-view.component';

describe('PostViewComponent', () => {
  let component: PostViewComponent;
  let fixture: ComponentFixture<PostViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PostViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
