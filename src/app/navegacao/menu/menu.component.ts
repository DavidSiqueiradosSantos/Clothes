import { Component, OnInit } from '@angular/core';
import { Categoria } from '../models/categoria';
import { HttpClient } from '@angular/common/http';
import { Menu } from '../models/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  categorias: Categoria[] = [];
  menu: Menu[] = [];
  constructor(private http:HttpClient) { }

  ngOnInit() {

    this.obterCategorias();
    this.obterMenu();
  }

  obterCategorias(): void {

    this.http.get<Categoria[]>('./assets/dados/categorias.json')
    .subscribe((categoria:Categoria[]) => {
      this.categorias = categoria;
    });
  }

  obterMenu(): void {
    this.http.get<Menu[]>('./assets/dados/menu.json')
    .subscribe((menu:Menu[]) => {
      this.menu = menu;
      console.log(this.categorias);
    });
  }

  obterMenuFiltrado(categoriaId:number){
    return  this.menu.filter(x=>x.categoriaId==categoriaId);
  }
}
