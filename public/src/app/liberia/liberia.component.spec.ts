import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiberiaComponent } from './liberia.component';

describe('LiberiaComponent', () => {
  let component: LiberiaComponent;
  let fixture: ComponentFixture<LiberiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiberiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiberiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
