import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Users } from '../users'; 
import { Repo } from '../repos';
import {ApiResponseServService} from '../api-response-serv.service'


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers:[ApiResponseServService]
})
export class UsersComponent implements OnInit {

  constructor(apiRespond:ApiResponseServService, private http:HttpClient) { }

  ngOnInit(): void {
  }

}
