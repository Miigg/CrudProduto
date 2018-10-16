import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../produto.service';


@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrls: ['./criar-produto.component.css']
})
export class CriarProdutoComponent implements OnInit {
  produtoForm: FormGroup;
  title = 'Criar';
  id: number;
  errorMessage: any;
  constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
    private _produtoService: ProdutoService, private _router: Router) {
    if (this._avRoute.snapshot.params['id']) {
      this.id = this._avRoute.snapshot.params['id'];
    }
    this.produtoForm = this._fb.group({
      id: 0,
      descricao: ['', [Validators.required]],
      valor: ['', [Validators.required]],
      quantidade: ['', [Validators.required]]
    });

  }

  ngOnInit() {
    if (this.id > 0) {
      this.title = 'Editar';
      this._produtoService.getProdutoById(this.id)
        .subscribe(resp => this.produtoForm.setValue(resp)
          , error => this.errorMessage = error);
    }
  }

  save() {

    if (!this.produtoForm.valid) {
      return;
    }

    if (this.title === 'Criar') {
      this._produtoService.saveProduto(this.produtoForm.value)
        .subscribe((data) => {
          this._router.navigate(['/produto']);
        }, error => this.errorMessage = error);
    } else if (this.title === 'Editar') {
      const ans = confirm('Voce tem certeza que quer alterar o produto : ' + this.produtoForm.value.id );
      if (ans) {
        this._produtoService.updateProduto(this.produtoForm.value)
          .subscribe((data) => {
            this._router.navigate(['/produto']);
          }, error => this.errorMessage = error);
      }
    }
  }

  cancel() {
    this._router.navigate(['/produto']);
  }

  get descricao() { return this.produtoForm.get('descricao'); }
  get valor() { return this.produtoForm.get('valor'); }
  get quantidade() { return this.produtoForm.get('quantidade'); }
}
