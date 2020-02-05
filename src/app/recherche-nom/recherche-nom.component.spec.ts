import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheNomComponent } from './recherche-nom.component';

describe('RechercheNomComponent', () => {
  let component: RechercheNomComponent;
  let fixture: ComponentFixture<RechercheNomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheNomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheNomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
