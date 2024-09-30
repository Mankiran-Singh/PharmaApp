import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router:Router) { }
  canActivate():boolean{
    let token=localStorage.getItem('token')
    if(token){
       this.router.navigate(['/dashboard'])
       return false;
    }else{
        return true;
    }
 }
}
