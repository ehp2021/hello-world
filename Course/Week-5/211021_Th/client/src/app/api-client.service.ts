import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject} from 'rxjs';
import { Movie } from './movie';
import { MovieDetails } from './moviedetails';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Category } from './category';


@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  private moviesUrl = "http://movied.herokuapp.com" // URL to web api
  selectedCategories: Movie[] = [];
  categoryStream$ = new BehaviorSubject<Movie[]>(this.selectedCategories);
 
  constructor(private http: HttpClient) { }

//   getDiscoverMovies() – Get the box-office list of movies
getDiscoverMovies(): Observable<Movie[]> {
  return this.http.get<Movie[]>(this.moviesUrl +'/discover')
    .pipe(
      tap(_ => console.log('fetched the movies')),
      catchError(this.handleError<Movie[]>('getMovies', []))
    );
}    

private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead
    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

//   getCategoryMovies(categoryId) – Get the list of movies for a given category
  getCategoryMovies(categoryId: number): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesUrl + '/categories/' + categoryId) // get all action movies by categoryId
    .pipe(
      tap(_ => console.log('fetched the movies')),
      catchError(this.handleError<Movie[]>('getMovies', []))
    );
  }
  getMovie(id:number): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(this.moviesUrl +'/movie/' + id)
    .pipe(
      tap(_ => console.log('fetched the movie detailss')),
      catchError(this.handleError<MovieDetails>('getMovie'))
    );
  }
  selectCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.moviesUrl + '/categories/')
    .pipe(
      tap(_ => console.log('fetched the categories')),
      catchError(this.handleError<Category[]>('selectCategories', []))
    );
  }

  addToCategoryCollection(movies: Movie[]): void {
    this.selectedCategories = [];
    movies.forEach(movie => this.selectedCategories.push(movie))
    this.categoryStream$.next(this.selectedCategories);
  }
};

