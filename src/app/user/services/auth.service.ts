import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from '../models/register';


// const headerData={
//   headers:{ 'content-type': 'application/json'}
// }
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userId= 'abc'
  constructor(private http: HttpClient) { }


  registerUser(data: Register):Observable<any> {
    return this.http.post('/api/users/register',data)
  }

}
