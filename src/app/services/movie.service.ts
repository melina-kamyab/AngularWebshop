import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Movie } from '../models/Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  // Get the Movies-model and create an empty array, and call it movies. Make it private so that it can only be used in this file. 
  private movies = new Subject<Movie[]>();
  movies$ = this.movies.asObservable();

  //In order to be able to get data from an API we need to import a certain module called HttpClient (see above as well as in app.module.ts )
  //and then use that module, and cteate a prperty in its constructor of that type 
  constructor(private http: HttpClient) { }


  //function to get movies from API 
  getMovies():void {

    //if items from API are not saved in the localstorage, and we are not able to
    //get data, named movies do the following:
    if (!localStorage.getItem('movies')) {
      //get the data from the api and update localstorage
      this.http
      .get<Movie[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/products')
      .subscribe((data) => {
        this.movies.next(data);
        localStorage.setItem('movies', JSON.stringify(data));
      })

      //otherwise, get cached data from the localstorage and place it in movies:
    } else {
      this.movies.next(JSON.parse(localStorage.getItem('movies')));
    }
  }
}
