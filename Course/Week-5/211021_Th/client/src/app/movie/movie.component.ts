import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { ApiClientService } from '../api-client.service';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movies: Movie[] = []; 
      //{
      // adult: false,
      //   backdrop_path: "/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
      //   genre_ids: [
      //       28,
      //       878,
      //       12
      //   ],
      //   id: 27205,
      //   original_language: "en",
      //   original_title: "Inception",
      //   overview: "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious.",
      //   popularity: 138.679,
      //   poster_path: "/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
      //   release_date: "2010-07-15",
      //   title: "Inception",
      //   video: false,
      //   vote_average: 8.3,
      //   vote_count: 30049
  //}
  constructor(private apiClientService: ApiClientService) { }

  ngOnInit(): void {
    this.getDiscoverMovies();
  }

  getDiscoverMovies():void {
    this.apiClientService.getDiscoverMovies()
      .subscribe(movies => this.movies = movies);
  }
  

}
