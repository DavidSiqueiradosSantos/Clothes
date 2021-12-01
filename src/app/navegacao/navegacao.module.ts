import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuTopoComponent } from './menu-topo/menu-topo.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [MenuComponent,MenuTopoComponent],
  exports:[MenuComponent,MenuTopoComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ]
})
export class NavegacaoModule { }
