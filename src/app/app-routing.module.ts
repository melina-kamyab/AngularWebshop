import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';


const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: 'myCart', component: ShoppingCartComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
