import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNavegComponent } from './menu-naveg.component';

describe('MenuNavegComponent', () => {
  let component: MenuNavegComponent;
  let fixture: ComponentFixture<MenuNavegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuNavegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuNavegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
