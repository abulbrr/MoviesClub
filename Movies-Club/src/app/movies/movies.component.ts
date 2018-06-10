import { Component, OnInit } from '@angular/core';
import { MoviesService } from './shared/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [MoviesService]
})
export class MoviesComponent implements OnInit {

  constructor(private moviesService : MoviesService) { }

  ngOnInit() {
  }

}
