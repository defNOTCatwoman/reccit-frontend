import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubreccitSideBarComponent } from './subreccit-side-bar.component';

describe('SubreccitSideBarComponent', () => {
  let component: SubreccitSideBarComponent;
  let fixture: ComponentFixture<SubreccitSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubreccitSideBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubreccitSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
