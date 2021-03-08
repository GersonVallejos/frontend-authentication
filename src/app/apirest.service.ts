import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
import { LoginI } from './modelo/login.interface';

@Injectable({
  providedIn: 'root'
})
export class ApirestService {

  model: any = {};

  private baseURL = "http://localhost:8080/api/v1";
  constructor(private http: HttpClient) {
    
   }

  registerUser(user: User): Observable<any>{
    return this.http.post(`${this.baseURL}/registration`,user,{responseType: 'text'});
  }

  loginUser(form: LoginI): Observable<any>{
    return this.http.post(`${this.baseURL}/login`,form);
  }
}
