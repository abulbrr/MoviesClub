import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../shared/movies.service';
import { Movie } from '../shared/movie.model';

// import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  moviesList: Movie[];

  constructor(private moviesService : MoviesService ) { }

  ngOnInit() {
    var x = this.moviesService.getData();
    x.snapshotChanges().subscribe(item => {
      this.moviesList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.moviesList.push(y as Movie );
      });
    });
  }

  onEdit(movie: Movie ) {
    this.moviesService.selectedMovie = Object.assign({}, movie);
    this.moviesService.selectedMovie.rating = movie.rating;
    // this.moviesService.selectedMovie = movie;
    
      // console.log(this.moviesService.selectedMovie);
  }

  onDelete(key: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.moviesService.deleteMovie(key);
      console.log("deleted");
      // this.tostr.warning("Deleted Successfully", "Employee register");
    }
  }
}
