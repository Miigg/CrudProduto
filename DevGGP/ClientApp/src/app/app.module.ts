import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ProdutoComponent } from './produto/produto.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ProdutoService } from './produto.service';
import { CriarProdutoComponent } from './criar-produto/criar-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ProdutoComponent,
    FetchDataComponent,
    CriarProdutoComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'produto', component: ProdutoComponent },
      { path: 'criar-produto', component: CriarProdutoComponent },
      { path: 'produto/edit/:id', component: CriarProdutoComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ])
  ],
  providers: [ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
