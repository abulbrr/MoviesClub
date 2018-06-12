import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { MoviesService } from '../shared/movies.service';
import { Movie } from '../shared/movie.model';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {

  constructor(public moviesService : MoviesService ) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(employeeForm: NgForm) {
    if (employeeForm.value.$key == null) {
      this.moviesService.insertMovie(employeeForm.value);
      console.log(employeeForm.value);
    }
    else {
      this.moviesService.updateMovie(employeeForm.value);
      this.resetForm(employeeForm);
    }
    // this.tostr.success('Submitted Succcessfully', 'Employee Register');
  }

  resetForm(employeeForm?: NgForm) {
    if (employeeForm != null)
      employeeForm.reset();
      this.moviesService.selectedMovie = {
        $key: null,
        name: '',
        rating: 0,
        description: '',
        imageLink : ''
      }
  
  }
}
