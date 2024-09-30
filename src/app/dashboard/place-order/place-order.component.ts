import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HotToastService } from '@ngneat/hot-toast';
import { HttpRequestService } from 'src/app/services/http-requests/http-request.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss']
})
export class PlaceOrderComponent {
  orderForm = new FormGroup({
    items: new FormControl('', [Validators.required]),
    // delivery_type
    patient_name: new FormControl('', Validators.required),
    mobile: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]),
    address: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    zipcode: new FormControl('', [Validators.required]),
    //auto_assign,
    //chemist_id
    //latitude
    //longitude
  });
  data:any
  constructor( public dialogRef: MatDialogRef<PlaceOrderComponent>,private httpService:HttpRequestService,
    @Inject(MAT_DIALOG_DATA) public dialogData:any,
    private toast: HotToastService){
      console.log(dialogData)
      this.data=dialogData
      this.orderForm.patchValue({
        items: dialogData.medicine_name,
        patient_name:'Manav Patel',
        mobile:'7458787853',
        city:'Banglore',
        state:'Karnataka',
        address:'Cambridge Road, Halasuru',
        zipcode:'560008'
      });
      this.orderForm.get('items')?.disable();
    }
   
    onSubmit(data:any) {
      if (this.orderForm.valid) {
        const formValue:any = this.orderForm.value;
        const formattedItems = Array.isArray(formValue.items) ? formValue.items.map((item: any) => ({
          medicine_id: item.medicine_id,
          quantity: item.quantity
        })) : [{  medicine_id: data.medicine_id,
          quantity: data.quantity}];
        const orderData = {
          ...formValue,
          items: formattedItems
        };
        console.log(this.orderForm.value,"odered",orderData)
        this.httpService.placeOrder(orderData).subscribe(
          (res:any)=>{
            console.log(res)
            if(res.status_code==="1"){
                this.toast.success('Order placed successfully')
                this.dialogRef.close(this.orderForm.value);
            }else{
                this.toast.error('Something went wrong')
            }
          }
        );
      }
    }
    
}
