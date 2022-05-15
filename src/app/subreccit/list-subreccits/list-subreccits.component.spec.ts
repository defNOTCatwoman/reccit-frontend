import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSubreccitsComponent } from './list-subreccits.component';

describe('ListSubreccitsComponent', () => {
  let component: ListSubreccitsComponent;
  let fixture: ComponentFixture<ListSubreccitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSubreccitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSubreccitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
