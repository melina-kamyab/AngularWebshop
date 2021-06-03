import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ConfirmationPageComponent } from './components/confirmation-page/confirmation-page.component';
import { MoviesComponent } from './components/movies/movies.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';


const routes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'myCart', component: ShoppingCartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'confirmation', component: ConfirmationPageComponent },
  { path: 'admin', component: AdminComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
