import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { _URL_AUTHUSER, _URL_GETREFAS, _URL_GETUSERS, _URL_REGISTER, _URL_WHEATHER } from '../config/config';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  authPost(data:Object):Observable<Object>{
    return this.http.post(_URL_AUTHUSER,data);
  }
  authRegister(data:Object):Observable<Object>{
    return this.http.post(_URL_REGISTER,data);
  }
  wheatherApi():Observable<any>{
    return this.http.get(_URL_WHEATHER);
  }
  getUsers():Observable<any>{
    return this.http.get(_URL_GETUSERS);
  }
  getRefas():Observable<any>{
    return this.http.get(_URL_GETREFAS);
  }
}
