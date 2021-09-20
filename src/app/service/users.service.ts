import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { forkJoin, Observable } from 'rxjs';
import { map, pluck, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { 

  }

  getUsers():Observable<any>{
    return this.httpClient.get('https://reqres.in/api/users?page=2')
    .pipe(
      tap(response => { console.log('log side effect while performing map: ', response)}),
      map(response => {
      return response
    }))
  }

  getData():Observable<any>{
    return this.httpClient.get('https://reqres.in/api/users?page=2')
    .pipe(
      pluck('data'),
      map(response => {
      return response
    }))
  }

  getUsersAndColor():Observable<any>{
    console.log('test');
    let users = this.httpClient.get('https://reqres.in/api/users?page=2');
    let colors = this.httpClient.get('https://reqres.in/api/unknown');
    return forkJoin({
      users: users,
      colors: colors
    }).pipe(
      tap(response => {console.log('join result: ', response)}),
      map(response => {
        return response;
      }) 
    )
  }
}
