import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { API_URL } from 'src/environments/environments';
import { loginUrl } from 'src/environments/environments';
import { apiKey } from 'src/environments/environments';
/*Sending token in headers*/
const token=localStorage.getItem('token')
// const headers = { 'Authorization': `Bearer ${apiKey}` };
/**************************/

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  constructor(private http:HttpClient,private router:Router) { }

  search(searchstring: string): Observable<any> {
    const formData = new FormData();
    formData.append('apikey', apiKey);
    formData.append('searchstring', searchstring);

    const url = `${API_URL}medicines/search`; // Concatenate base URL with endpoint

    return this.http.post(url, formData);
  }
  
  login(mobile:any, password:string){
    const formData = new FormData();
    formData.append('apikey', apiKey);
    formData.append('mobile', mobile);
    formData.append('password', password);
    const url = `${loginUrl}login`; // Concatenate base URL with endpoint

    return this.http.post(url, formData);
  }
  

}