import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceipedetailComponent } from './receipedetail.component';

describe('ReceipedetailComponent', () => {
  let component: ReceipedetailComponent;
  let fixture: ComponentFixture<ReceipedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceipedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceipedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
