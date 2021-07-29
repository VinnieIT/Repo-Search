import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Users } from '../users'; 
import { NgForm } from '@angular/forms';
import { Repo } from '../repos';
import { Router } from '@angular/router';
import {ApiResponseServService} from '../api-response-serv.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers:[ApiResponseServService]
})
export class UsersComponent implements OnInit {

  user!: Users;
  public searchNames!: string;
  public ghubProfile: any;
  public githubRepos!:any[];
  public errorAlert!: string;


  constructor(private apiRespond:ApiResponseServService, private router:Router) { }

  ngOnInit() {
  }

  public getUserName(){
    //profile search
    this.apiRespond.getUserProfile(this.searchNames).subscribe((data)=> {
      this.ghubProfile = data;
      console.log(this.ghubProfile);


    },(error)=>{
      this.errorAlert =error;

    });

    //get repos
    this.apiRespond.getUserRepos(this.searchNames).subscribe((data)=> {
      this.githubRepos = data ;
      console.log(this.githubRepos);

    },(error)=>{
      this.errorAlert =error;

    });
    
    
  }
   
       
     }

