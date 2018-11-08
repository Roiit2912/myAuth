import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { tokenKey } from '@angular/core/src/view';
//import * as jwt_decode from 'jwt-decode';
export const SME_TOKEN : string = 'SME_TOKEN';
export const LEARNER_TOKEN : string = 'LEARNER_TOKEN'; 


@Injectable({
  providedIn: 'root'
})
export class TestService {

  smeToken:any;
  learnerToken:any;
  

  constructor(private http: HttpClient) { }


  smeSignIn(signIn)
  {
   const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  return this.http.post('http://localhost:5000/sme/signIn/',signIn, httpOptions);

  }


  smeSignUp(signUp)
  {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post('http://localhost:5000/sme/signUp',signUp,httpOptions);
  }


  learnerSignIn(signIn)
  {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post('http://localhost:5000/learner/signIn',signIn,httpOptions);
    
  }


  learnerSignUp(signUp)
  {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post('http://localhost:5000/learner/signUp',signUp,httpOptions);
  }




}
