import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GutenTagComponent } from './guten-tag.component';

describe('GutenTagComponent', () => {
  let component: GutenTagComponent;
  let fixture: ComponentFixture<GutenTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GutenTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GutenTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
