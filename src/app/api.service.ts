import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getAllData=()=>{
    return this.http.get('http://localhost:8080/api/task/all-tasks');
  }
  CreateTask=(data:any)=>{
    return this.http.post('http://localhost:8080/api/task/create', data);
  }
}
