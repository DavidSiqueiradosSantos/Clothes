import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProdutoComponent } from './produto/lista-produto/lista-produto.component';
import { ProdutoDetalheComponent } from './produto/produto-detalhe/produto-detalhe.component';

const routes: Routes = [
  {
    path: '', redirectTo:'/home', pathMatch: 'full',
  },
  {
    path:'home',component:ListaProdutoComponent
  },
  {
    path:'produtos/:filtrarProd/:filtro',
    component:ListaProdutoComponent
  },
  {
    path:'produto/detalhe/:id',
    component:ProdutoDetalheComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
