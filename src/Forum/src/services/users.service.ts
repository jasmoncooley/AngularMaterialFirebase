import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { retry ,  catchError ,  tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getLimmitedUsers(limit:number,page:number):Observable<any>{
    return this.http.get<any>(environment.apiUrl+`/users?page=${page}&limit=${limit}`)

    .pipe(
      retry(1),
      catchError((error:any) => {
        if (error instanceof HttpErrorResponse){     
          console.log('IN catchError of getUsers')
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
  getAllUsers(limit:number,page:number):Observable<any>{

    return this.http.get<any>(environment.apiUrl+`/users`)

    .pipe(
      retry(1),
      catchError((error:any) => {
        if (error instanceof HttpErrorResponse){     
          console.log('IN catchError of getUsers')
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


