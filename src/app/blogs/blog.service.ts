import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IBlog } from './blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(private http: HttpClient) { }

  dataUrl = 'http://localhost:3003/api/blogs';

  getAll(): Observable<IBlog[]> {
    return this.http.get<IBlog[]>(this.dataUrl).pipe(catchError(this.handleError));
  }

  handleError(err: HttpErrorResponse) {
    // console.log(err.name, err.message);
    return throwError(err.message);
  }
}
