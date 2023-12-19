import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { environment } from "../../environments/environment.development";;
import { Equipamento } from './../models/equipamentos.model';

@Injectable({
  providedIn: 'root'
})
export class equipamentosservice {

    private url = environment.api

    constructor(private httpClient: HttpClient){
    }

    obterEquipamentos() {
      return this.httpClient.get<Equipamento[]>(this.url)
    }

    //pesquisarEquipamentoId(id: number){
    //  return this.httpClient.get<Equipamento>(`${this.url}${id}`,);
    //}

    cadastrarEquipamento(equipamento: Equipamento) {
      return this.httpClient.post<Equipamento>(this.url, equipamento);
    }

    editarEquipamento(equipamento: Equipamento) {
      return this.httpClient.put<Equipamento>(`${this.url}${equipamento.id}`, equipamento);
    }

    removerEquipamento(id: number){
      return this.httpClient.delete<void>(`${this.url}${id}`,);
    }
  }
