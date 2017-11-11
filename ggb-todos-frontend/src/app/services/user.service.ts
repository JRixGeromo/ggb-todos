import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  getUsers(){
    return this.http.get('https://still-plateau-74141.herokuapp.com/api/users').map(res => res.json());
  }

  saveUser(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('https://still-plateau-74141.herokuapp.com/api/users', user, {headers: headers})
      .map(res => res.json());
  }

}
