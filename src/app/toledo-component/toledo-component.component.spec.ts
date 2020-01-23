import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToledoComponentComponent } from './toledo-component.component';

describe('ToledoComponentComponent', () => {
  let component: ToledoComponentComponent;
  let fixture: ComponentFixture<ToledoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToledoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToledoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
