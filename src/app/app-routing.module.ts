import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsPageComponent } from './products/pages/basics-page/basics-page.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./products/products.module').then( m => m.ProductsModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
