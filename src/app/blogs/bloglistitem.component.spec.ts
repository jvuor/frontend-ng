import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloglistitemComponent } from './bloglistitem.component';

describe('BloglistitemComponent', () => {
  let component: BloglistitemComponent;
  let fixture: ComponentFixture<BloglistitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloglistitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloglistitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
