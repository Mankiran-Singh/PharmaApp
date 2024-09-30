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
      if(mobile==='7777777777' && password==='test@api'){
          localStorage.setItem('token','bfuebrfuebfubfbwifbwigdwdwd')
          this.loginForm.reset();
          this.router.navigate(['/dashboard'])
          this.toast.success('Login Successful!')
        }else{
          this.toast.error('Invalid Details')
        }
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
