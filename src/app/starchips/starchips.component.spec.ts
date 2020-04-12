import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarchipsComponent } from './starchips.component';

describe('StarchipsComponent', () => {
  let component: StarchipsComponent;
  let fixture: ComponentFixture<StarchipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarchipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarchipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
