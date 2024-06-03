import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SexPage } from './sex.page';

describe('SexPage', () => {
  let component: SexPage;
  let fixture: ComponentFixture<SexPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
