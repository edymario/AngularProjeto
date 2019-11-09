import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamadoViewComponent } from './chamado-view.component';

describe('ChamadoViewComponent', () => {
  let component: ChamadoViewComponent;
  let fixture: ComponentFixture<ChamadoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChamadoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamadoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
