import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
import { FiltroTipo } from "src/app/navegacao/models/TipoDeFiltro";
import { Produto } from '../models/produtos';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})
export class ListaProdutoComponent implements OnInit {
  produtos: Produto[] = [];
  filtro: string='';
  filtrarProd: string='';
  

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {

    this.router.events.subscribe( value => {
      this.obterProdutos();
    })
  }

  ngOnInit() {
    this.obterProdutos();
  }

  obterProdutos(){

    this.obterParametros();

    this.http.get<Produto[]>('./assets/dados/produtos.json')
    .subscribe(produto=> {

      this.produtos = produto
      console.log(this.filtro)

      if(this.filtrarProd == FiltroTipo.Estilo){
        this.produtos = this.produtos.filter(
          x=>x.estilo.trim().toLowerCase() == this.filtro.trim().toLowerCase()
          
          );
     
      
      
      } 
      
        if(this.filtrarProd == FiltroTipo.Marca) {
        this.produtos = this.produtos.filter(
          x=> x.marca.trim().toLowerCase() == this.filtro.trim().toLowerCase()
          
          );
        
     
        
      }
      if(this.filtrarProd == FiltroTipo.Tipo) {
        this.produtos = this.produtos.filter(
          x=> x.tipo.trim().toLowerCase() == this.filtro.trim().toLowerCase()
          );
      }
      });
    
  }

  obterParametros(){
    this.filtrarProd = this.route.snapshot.params['filtrarProd'];
    this.filtro = this.route.snapshot.params['filtro'];
    
  }
}
