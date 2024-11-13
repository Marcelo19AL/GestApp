import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestAppPage } from './gest-app.page';

describe('GestAppPage', () => {
  let component: GestAppPage;
  let fixture: ComponentFixture<GestAppPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GestAppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
