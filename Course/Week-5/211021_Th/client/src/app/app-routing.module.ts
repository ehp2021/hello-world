import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListItemComponent } from './movie-list-item/movie-list-item.component'
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'movie/:movieId', component: MovieListItemComponent},
  { path:'', redirectTo: 'dashboard', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
