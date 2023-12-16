import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroEquipamentosComponent } from './views/equipamentos/cadastro-equipamentos/cadastro-equipamentos.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroEquipamentosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
