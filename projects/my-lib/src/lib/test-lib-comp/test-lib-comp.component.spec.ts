import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLibCompComponent } from './test-lib-comp.component';

describe('TestLibCompComponent', () => {
  let component: TestLibCompComponent;
  let fixture: ComponentFixture<TestLibCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestLibCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLibCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
