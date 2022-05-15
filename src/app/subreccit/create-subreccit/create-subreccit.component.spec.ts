import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubreccitComponent } from './create-subreccit.component';

describe('CreateSubreccitComponent', () => {
  let component: CreateSubreccitComponent;
  let fixture: ComponentFixture<CreateSubreccitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSubreccitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSubreccitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
