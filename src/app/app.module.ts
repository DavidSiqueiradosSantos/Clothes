import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadcrumbComponent } from './navegacao/breadcrumb/breadcrumb.component';
import { NavegacaoModule } from './navegacao/navegacao.module';
import { CardProdutoComponent } from './produto/card-produto/card-produto.component';
import { ListaProdutoComponent } from './produto/lista-produto/lista-produto.component';
import { ProdutoDetalheComponent } from './produto/produto-detalhe/produto-detalhe.component';

@NgModule({
  declarations: [
    AppComponent,
    CardProdutoComponent,
    ListaProdutoComponent,
    ProdutoDetalheComponent,
    BreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavegacaoModule,
    RouterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }