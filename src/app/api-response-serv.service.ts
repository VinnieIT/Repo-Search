import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Users } from './users';
import{UserResponse} from './userinterface';
import { Repo } from './repos';
import {catchError, retry} from  'rxjs/operators'
import { Observable, throwError } from 'rxjs';
import { rendererTypeName } from '@angular/compiler';
import { count } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ApiResponseServService {
  
  user: UserResponse[] = [];
  allRepo:Repo[] =[];
  userUrl!:string;
  useRepo!:string;

  
  


  public fixURL(sname:string){
  
    this.useRepo = ('https://api.github.com/users/'+sname+'/repos/?access_token=' + environment.apiKey);

  }
  
    
  

  constructor(private http: HttpClient ) { }


  //profiles
  getUserProfile(userSearch: any):Observable<UserResponse>{
    let userUrl = `https://api.github.com/users/${userSearch}`;
    return this.http.get<any>(userUrl).pipe(
      retry(1),
      catchError(this.PErrors)
    );
  

  }
  getUserRepos(userSearch: any):Observable<any[]>{
    let userUrl = `https://api.github.com/users/${userSearch}/repos`;
    return this.http.get<any[]>(userUrl).pipe(
      retry(1),
      catchError(this.PErrors)
    );
  

  }

  public PErrors(error: HttpErrorResponse){
    let errorMes:string;
    if (error.error instanceof ErrorEvent) {
      errorMes = `MESSAGE: $(error.error.message)`
      
    }
    else{
      errorMes = `STATUS: $(error.status}   MESSAGE :$(error.message)`

    }
    return throwError(errorMes);
    
  }
}
