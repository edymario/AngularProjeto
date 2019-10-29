import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamadoModalComponent } from './chamado-modal.component';

describe('ChamadoModalComponent', () => {
  let component: ChamadoModalComponent;
  let fixture: ComponentFixture<ChamadoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChamadoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamadoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
