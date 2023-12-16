import { CadastroEquipamentosComponent } from './views/equipamentos/cadastro-equipamentos/cadastro-equipamentos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"cadastrar", component: CadastroEquipamentosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
