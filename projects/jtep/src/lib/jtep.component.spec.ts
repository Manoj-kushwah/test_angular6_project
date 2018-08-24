import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JtepComponent } from './jtep.component';

describe('JtepComponent', () => {
  let component: JtepComponent;
  let fixture: ComponentFixture<JtepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JtepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JtepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
