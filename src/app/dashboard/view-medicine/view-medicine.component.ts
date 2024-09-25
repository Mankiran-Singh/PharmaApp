import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { subscribeOn } from 'rxjs';
import { EventService } from 'src/app/services/events/event.service';
import { HttpRequestService } from 'src/app/services/http-requests/http-request.service';
import { OrdersComponent } from '../orders/orders.component';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-view-medicine',
  templateUrl: './view-medicine.component.html',
  styleUrls: ['./view-medicine.component.scss']
})
export class ViewMedicineComponent {
 constructor( public dialogRef: MatDialogRef<ViewMedicineComponent>,private httpService:HttpRequestService,
  @Inject(MAT_DIALOG_DATA) public dialogData:any, private eventService:EventService,private dialog:MatDialog,
  private toast: HotToastService){
     
  }

  medicine:any
  ngOnInit(){
    this.httpService.viewMedicine('["gv0GokYn9w4zFL51eouS2g=="]').subscribe((res:any)=>{
      console.log(res['data'])
         this.medicine=res['data']
    })
  }

  quantity: number = 1;
  
  decreaseQuantity(): void {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }

  increaseQuantity(): void {
    if (this.quantity < 10) {
      this.quantity++;
    }
  }

  buy(medicine: any, quantity: number) {
    const updatedMedicine = {
      ...medicine, 
      quantity: quantity
    };

  if(updatedMedicine){
    this.toast.success('Order Placed')
    this.dialogRef.close()
    const dialogRef = this.dialog.open(OrdersComponent, {
      width: '400px',
      height: '150px',
      position: { top: '82px', left: '65%' },
      panelClass: 'custom-order-container',
      data: {
        content: updatedMedicine.content,
        mrp: updatedMedicine.mrp,
        quantity: updatedMedicine.quantity,
        pack_size: updatedMedicine.packing_size
      }
    });
  }else{
    this.toast.error("Something went wrong")
  }
}
  
}
