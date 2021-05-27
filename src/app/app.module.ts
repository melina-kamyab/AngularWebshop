import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieComponent } from './components/movie/movie.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
    PageNotFoundComponent,
    ShoppingCartComponent,
    NavbarComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
