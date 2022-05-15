import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSubreccitComponent } from './view-subreccit.component';

describe('ViewSubreccitComponent', () => {
  let component: ViewSubreccitComponent;
  let fixture: ComponentFixture<ViewSubreccitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSubreccitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSubreccitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
