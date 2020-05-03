import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }

  getUserPosts(id:number):Observable<any>{

    return this.http.get<any>(environment.apiUrl+`/users/${id}/posts`)

    .pipe(
      retry(1),
      catchError((error:any) => {
        if (error instanceof HttpErrorResponse){     
          console.log('IN catchError of getUserPosts')
          console.log(error.error.message)
          console.log(error.status)            
        }else{
          
          console.log('helooo from else')        
        }
        
        return throwError(
          'Something bad happened; please try again later.');
      })
      
    );
  }

  getSingleUser(id:number):Observable<any>{

    return this.http.get<any>(environment.apiUrl+`/users/${id}`)

    .pipe(
      retry(1),
      catchError((error:any) => {
        if (error instanceof HttpErrorResponse){     
          console.log('IN catchError of getSingleUser')
          console.log(error.error.message)
          console.log(error.status)            
        }else{
          
          console.log('helooo from else')        
        }
        
        return throwError(
          'Something bad happened; please try again later.');
      })
      
    );
  }


}
