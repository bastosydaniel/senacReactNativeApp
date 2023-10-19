import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanejamentoRotasComponent } from './planejamento-rotas.component';

describe('PlanejamentoRotasComponent', () => {
  let component: PlanejamentoRotasComponent;
  let fixture: ComponentFixture<PlanejamentoRotasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanejamentoRotasComponent]
    });
    fixture = TestBed.createComponent(PlanejamentoRotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
