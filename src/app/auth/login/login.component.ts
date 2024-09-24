import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { HttpRequestService } from 'src/app/services/http-requests/http-request.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!:FormGroup
  constructor(private readonly httpService:HttpRequestService,private toast:HotToastService,private router:Router){}
  ngOnInit(){
    this.loginForm=new FormGroup({
     mobile:new FormControl('',[Validators.required]),
     password:new FormControl('',[Validators.required,Validators.minLength(8)]),
    })
  }
  showErrors:boolean =false
  login(){
    if(this.loginForm.valid){
      const {mobile,password}=this.loginForm.value
       this.httpService.login(mobile,password).pipe(
         this.toast.observe({
           loading: 'Please wait...',
           success: 'Login successful!',
           error: 'Invalid Details',
         })
       ).subscribe(
         (res:any)=>{
           console.log("====>",res)
           this.router.navigate(['/dashboard'])
         }
       );
      }else{
        this.showErrors=true;
      }
 
   }


  get password(){
    return this.loginForm.get('password')
  }
  get mobile(){
    return this.loginForm.get('mobile')
  }
}
