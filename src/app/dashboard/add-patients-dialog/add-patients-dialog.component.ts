import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HotToastService } from '@ngneat/hot-toast';
import { HttpRequestService } from 'src/app/services/http-requests/http-request.service';

@Component({
  selector: 'app-add-patients-dialog',
  templateUrl: './add-patients-dialog.component.html',
  styleUrls: ['./add-patients-dialog.component.scss']
})
export class AddPatientsDialogComponent {


  userForm = new FormGroup({
    mobile: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]),
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    zipcode: new FormControl('', [Validators.required]),
    dob: new FormControl(''),
    gender: new FormControl('', Validators.required),
    blood_group: new FormControl('', Validators.required)
  });
  constructor(public dialogRef: MatDialogRef<AddPatientsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData:any,private fb: FormBuilder, public httpService:HttpRequestService,private toast: HotToastService){}

    onSubmit() {
      if (this.userForm.valid) {
        this.httpService.addPatient(this.userForm.value).subscribe(
          (res:any)=>{
            console.log(res)
            if(res.status_code==="1"){
                this.toast.success('Patient registered successfully')
                this.dialogRef.close(this.userForm.value);
            }else{
                this.toast.error('This Mobile Number already exists')
            }
          }
        );
      }
    }
}
