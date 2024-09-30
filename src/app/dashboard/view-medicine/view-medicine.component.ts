import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { subscribeOn } from 'rxjs';
import { EventService } from 'src/app/services/events/event.service';
import { HttpRequestService } from 'src/app/services/http-requests/http-request.service';
import { OrdersComponent } from '../orders/orders.component';
import { HotToastService } from '@ngneat/hot-toast';
import { PlaceOrderComponent } from '../place-order/place-order.component';

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

  addToCart(medicine: any, quantity: number) {
    const updatedMedicine = {
      ...medicine, 
      quantity: quantity
    };

  if(updatedMedicine){
    this.toast.success('Added to cart')
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

    order(medicine:any,quantity:any){
      this.dialogRef.close()
      const dialogRef = this.dialog.open(PlaceOrderComponent, {
        width: '500px',
        height: '500px',
        // position: { top: '82px', left: '65%' },
        panelClass: 'custom-place-order-container',
        data: {
           medicine_name:medicine.medicine_name,
           medicine_id:medicine.id,
           quantity
        }
      });
    }
  
}
