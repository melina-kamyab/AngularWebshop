import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { MoviesComponent } from './components/movies/movies.component';


const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: 'checkout/:id', component: CheckoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
