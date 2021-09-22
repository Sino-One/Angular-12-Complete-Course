import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoformComponent } from './to-doform.component';

describe('ToDoformComponent', () => {
  let component: ToDoformComponent;
  let fixture: ComponentFixture<ToDoformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
