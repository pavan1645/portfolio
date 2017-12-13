import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbeduComponent } from './abedu.component';

describe('AbeduComponent', () => {
  let component: AbeduComponent;
  let fixture: ComponentFixture<AbeduComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbeduComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbeduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
