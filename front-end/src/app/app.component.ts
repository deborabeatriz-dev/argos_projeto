import { equipamentosservice } from './services/equipamentos.service';
import { Component } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Equipamento } from './models/equipamentos.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'Argos Projeto';

  equipamentos$ = new Observable<Equipamento[]>();

  //Formulário
  idForm = '';
  placaForm = '';
  modeloForm = '';
  anoForm = '';

  //Pesquisa
  idPesquisa = 0;
  placaPesquisa = '';
  modeloPesquisa = '';
  anoPesquisa = '';

  constructor(private equipamentoSservice: equipamentosservice){
    this.obterequipamentosCadastrados()
  }

  obterequipamentosCadastrados(){
    if (!this.idPesquisa)

      this.equipamentos$ = this.equipamentoSservice.obterEquipamentos();
    else
      this.pesquisarEquipamentoId(this.idPesquisa)
      console.log("teste ok")
  }

  pesquisarEquipamentoId(idPesquisa: number){
    this.equipamentoSservice.pesquisarEquipamentoId(idPesquisa)
    .subscribe(_ => this.pesquisarEquipamentoId(idPesquisa))
  }

  buttonClick(){
    if(!this.placaForm || !this.modeloForm || !this.anoForm)
      return;

    if(this.idForm){
      this.atualizarEquipamento();
      return;
    }

    this.equipamentoSservice.cadastrarEquipamento({placa: this.placaForm, modelo: this.modeloForm, ano: +this.anoForm})
      .subscribe(_ => this.obterequipamentosCadastrados())
  }

  atualizarEquipamento(){
    this.equipamentoSservice.editarEquipamento({id:+this.idForm, placa: this.placaForm, modelo: this.modeloForm, ano: +this.anoForm  })
    .subscribe(_ => this.obterequipamentosCadastrados())
  }

  preencherCampos(equipamento:Equipamento){
    this.idForm = equipamento.id!.toString();
    this.placaForm = equipamento.placa;
    this.modeloForm = equipamento.modelo;
    this.anoForm = equipamento.ano!.toString();
  }

  removerEquipamento(idForm: number){
    this.equipamentoSservice.removerEquipamento(idForm)
    .subscribe(_ => this.obterequipamentosCadastrados())
  }
}
