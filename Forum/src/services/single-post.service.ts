import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SinglePostService {

  constructor(private http:HttpClient) { }

  getSinglePost(userId:number,postId:number):Observable<any>{

    return this.http.get<any>(environment.apiUrl+`/users/${userId}/posts/${postId}`)

    .pipe(
      retry(1),
      catchError((error:any) => {
        if (error instanceof HttpErrorResponse){     
          console.log('IN catchError of getSinglePost')
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
  getPostComments(userId:number,postId:number):Observable<any>{

    return this.http.get<any>(environment.apiUrl+ `/users/${userId}/posts/${postId}/comments`)

    .pipe(
      retry(1),
      catchError((error:any) => {
        if (error instanceof HttpErrorResponse){     
          console.log('IN catchError of getPostComments')
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
