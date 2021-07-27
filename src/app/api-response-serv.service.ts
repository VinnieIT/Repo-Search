import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Users } from './users';
import { Repo } from './repos';



@Injectable({
  providedIn: 'root'
})
export class ApiResponseServService {
  user = new Users()
  allRepo:Repo[] =[];
  userUrl!:string;
  useRepo!:string;


  fixURL(sname:string){
    this.userUrl = ('https://api.github.com/users/'+sname+'?access_token=' + environment.apiKey);
    this.useRepo = ('https://api.github.com/users/'+sname+'/repos/?access_token=' + environment.apiKey);

  }
  getUser(){
    interface userResponse{
      id:number;
      name:string;
      description: string;
      
    }
  }

  constructor(private http: HttpClient ) { }
}
