import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamadoNewComponent } from './chamado-new.component';

describe('ChamadoNewComponent', () => {
  let component: ChamadoNewComponent;
  let fixture: ComponentFixture<ChamadoNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChamadoNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamadoNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
