import { Injectable } from '@angular/core';
import { Movie } from './movie.model';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class    MoviesService {
  moviesList: AngularFireList<any>;
  selectedMovie: Movie = new Movie();

  constructor(private firebase : AngularFireDatabase) { }

  getData() {
    this.moviesList = this.firebase.list('movies');
    return this.moviesList;
  }

  insertMovie( movie: Movie ){
     this.moviesList.push({
      name: movie.name,
      rating: movie.rating,
      description: movie.description,
      imageLink : movie.imageLink
     });
  }

  updateMovie( movie: Movie ){
    this.moviesList.update(movie.$key, 
      {
      name: movie.name,
      rating: movie.rating,
      description: movie.description,
      imageLink: movie.imageLink
      }
    );
  }

  deleteMovie( $key: string){
    this.moviesList.remove($key);
  }






}
