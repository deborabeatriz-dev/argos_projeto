import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-equipamentos',
  templateUrl: './cadastro-equipamentos.component.html',
  styleUrl: './cadastro-equipamentos.component.css'
})
export class CadastroEquipamentosComponent implements OnInit{
  placaEquipamento = "";
  modeloEquipamento = "";
  anoEquipamento = "";
  nomeDispositivo = "";
  serialDispositivo = "";

  constructor() { }

  ngOnInit(): void {
  }

  salvarCadasto() {
    console.log("Salvo equipamento: " + this.nomeDispositivo);
    }

}
