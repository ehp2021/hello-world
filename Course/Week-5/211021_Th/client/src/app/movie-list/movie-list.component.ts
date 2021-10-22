import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie'; // selector
import { ApiClientService } from '../api-client.service';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  constructor(private apiClientServices : ApiClientService) { }

  ngOnInit(): void {
    this.getCategoryMovies(28); 
    this.apiClientServices.categoryStream$.subscribe((movies: Movie[]) => {
      this.movies = movies;
    })
  }
  getCategoryMovies(categoryId:number): void {
    this.apiClientServices.getCategoryMovies(categoryId) 
      .subscribe(movies => this.movies = movies);
  }

}
