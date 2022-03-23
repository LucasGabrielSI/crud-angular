import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap,first } from 'rxjs/operators';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/courses.json';

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Course[]>(this.API)
    .pipe(
      first(),
      tap(courses => console.log(courses))
    );
  }
}
