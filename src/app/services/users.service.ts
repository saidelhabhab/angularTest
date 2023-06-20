import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpUsersListResponse, UserType } from '../types/users.type';

 const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  public perPage = 6;


  constructor(protected http: HttpClient) { }

  isLoggedIn():boolean{

    return false;

  }

  getUsers(page: number): Observable<HttpUsersListResponse> {
    return (this.http.get(`${environment.apiLink}/users?delay=1&page=${page}&per_page=${this.perPage}`)) as Observable<HttpUsersListResponse>;
  }

  delete(id:number,page: number): Observable<HttpUsersListResponse> {
    return (this.http.delete(`${environment.apiLink}/users?delay=1&page=${page}&per_page=${this.perPage}/${id}`)) as Observable<HttpUsersListResponse>;
  }

  addUser(user:UserType): Observable<UserType> {
    return (this.http.post(`${environment.apiLink}/users`,user)) as Observable<UserType>;
  }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

}

