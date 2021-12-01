import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../models/produtos';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.css']
})
export class ProdutoDetalheComponent implements OnInit {

  produto: Produto;
  id: number;


  constructor(private http:HttpClient, private route: ActivatedRoute) {

    this.id = this.route.snapshot.params["id"];
  }

  ngOnInit() {
    this.obterProduto();
  }

  obterProduto(){

    console.log("a")
    this.http.get<Produto[]>('./assets/dados/produtos.json')
    .subscribe(prod => {
      this.produto = prod.filter(x=>x.id == this.id)[0];
      console.log("prod",this.produto)
    })
  }
}
