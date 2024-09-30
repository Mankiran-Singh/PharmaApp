import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, last, zip } from 'rxjs';
import { API_URL } from 'src/environments/environments';
import { loginUrl } from 'src/environments/environments';
import { apiKey } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  constructor(private http:HttpClient,private router:Router) { }

  search(searchstring: string): Observable<any> {
    const formData = new FormData();
    formData.append('apikey', apiKey);
    formData.append('searchstring', searchstring);

    const url = `${API_URL}medicines/search`; 

    return this.http.post(url, formData);
  }
  
  login(mobile:any, password:string){
    const formData = new FormData();
    formData.append('apikey', apiKey);
    formData.append('mobile', mobile);
    formData.append('password', password);
    const url = `${loginUrl}login`; 

    return this.http.post(url, formData);
  }
  
  addPatient(body:any){
    const formData = new FormData();
    formData.append('apikey', apiKey);
    const {mobile,first_name,last_name,zipcode,dob,gender,blood_group}=body
    formData.append('mobile', mobile);
    formData.append('first_name', first_name);
    formData.append('last_name', last_name);
    formData.append('zipcode', zipcode);
    formData.append('dob',dob);
    formData.append('gender',gender);
    formData.append('blood_group',blood_group);
     const url = `${API_URL}patients/add`
     return this.http.post(url,formData)
  }

  viewMedicine(medicine_id:string){
    const formData= new FormData();
    formData.append('apikey',apiKey);
    formData.append('medicine_id',medicine_id)
    const url = `${API_URL}medicines/view`
    return this.http.post(url,formData)
  }

  placeOrder(body:any){
    const formData = new FormData();
    formData.append('apikey', apiKey);
    const {items,patient_name,mobile,address,city,state,zipcode}=body
    formData.append('items', JSON.stringify(items));
    // formData.append('items', items);
    formData.append('delivery_type','delivery');
    formData.append('patient_name', patient_name);
    formData.append('mobile', mobile);
    formData.append('address',address);
    formData.append('city', city);
    formData.append('state', state);
    formData.append('zipcode',zipcode);
    formData.append('auto-assign','true');
    formData.append('chemist_id','pFSLzbwQTH8LY23N2IlczQ==');
    formData.append('latitude','12.970612');
    formData.append('longitude','77.6382433');
     const url = `${API_URL}orders/place_order`
     return this.http.post(url,formData)
  }
}