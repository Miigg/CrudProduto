import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { ProdutoService } from '../produto.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-produto-component',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {
  public prodList: Produtos[];
  constructor(public http: Http, private _router: Router, private _produtoService: ProdutoService) {
    this.getProdutos();
  }
  getProdutos() {
    this._produtoService.getProdutos().subscribe(
      data => this.prodList = data
    );
  }

  delete(idPoduto, descricao) {
    const ans = confirm('Voce tem certeza que quer deletar o produto : ' + descricao);
    if (ans) {
      this._produtoService.deleteProduto(idPoduto).subscribe((data) => {
        this.getProdutos();
      }, error => console.error(error));
    }
  }
}

interface Produtos {
  id: number;
  descricao: string;
  valor: string;
  quantidade: number;
}

