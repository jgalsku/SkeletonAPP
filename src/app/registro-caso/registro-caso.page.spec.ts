import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroCasoPage } from './registro-caso.page';

describe('RegistroCasoPage', () => {
  let component: RegistroCasoPage;
  let fixture: ComponentFixture<RegistroCasoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroCasoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
