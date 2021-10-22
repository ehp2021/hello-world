import { Component, OnInit } from '@angular/core';
// import { Movie } from '../movie';
import { ActivatedRoute } from '@angular/router';
import { ApiClientService } from '../api-client.service';
import { MovieDetails } from '../moviedetails';


@Component({
  selector: 'app-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.css']
})
export class MovieListItemComponent implements OnInit {
  movie : MovieDetails | undefined;
  constructor(
    private apiClientService: ApiClientService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.getMovie();
  }
//   getHero(): void {
//   const id = Number(this.route.snapshot.paramMap.get('id'));
//   this.heroService.getHero(id)
//     .subscribe(hero => this.hero = hero);
// }
getMovie(): void {
  const id = Number(this.route.snapshot.paramMap.get('movieId'));
  console.log(id);
  this.apiClientService.getMovie(id)
    .subscribe(movie => this.movie = movie);
}

}
