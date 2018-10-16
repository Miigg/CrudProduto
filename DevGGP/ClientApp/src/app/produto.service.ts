import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class ProdutoService {
  myAppUrl = '';

  constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
    this.myAppUrl = baseUrl;
  }

  getProdutos() {
    return this._http.get(this.myAppUrl + 'api/Produtos')
      .map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  getProdutoById(id: number) {
    return this._http.get(this.myAppUrl + 'api/Produtos/' + id)
      .map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  saveProduto(Produto) {
    return this._http.post(this.myAppUrl + 'api/Produtos', Produto)
      .map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  updateProduto(Produto) {
    return this._http.put(this.myAppUrl + 'api/Produtos/' + Produto.id , Produto)
      .map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  deleteProduto(id) {
    return this._http.delete(this.myAppUrl + 'api/Produtos/' + id)
      .map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  errorHandler(error: Response) {
    console.log(error);
    return Observable.throw(error);
  }
}
