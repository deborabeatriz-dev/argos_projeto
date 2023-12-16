import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroEquipamentosComponent } from './cadastro-equipamentos.component';

describe('CadastroEquipamentosComponent', () => {
  let component: CadastroEquipamentosComponent;
  let fixture: ComponentFixture<CadastroEquipamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroEquipamentosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroEquipamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
