import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpRequestService } from 'src/app/services/http-requests/http-request.service';
import { SearchDialogComponent } from '../search-dialog/search-dialog.component';
import { ChartType } from 'chart.js';
import { AddPatientsDialogComponent } from '../add-patients-dialog/add-patients-dialog.component';
import { OrdersComponent } from '../orders/orders.component';
import { ViewMedicineComponent } from '../view-medicine/view-medicine.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation:ViewEncapsulation.Emulated
})
export class DashboardComponent {
constructor(private readonly httpService:HttpRequestService,private router:Router,public dialog: MatDialog){}
title!: string
analytics = [
  {
    title: 'Total Sales',
    value: '$12,340',
    icon: 'attach_money',
    color: 'primary'
  },
  {
    title: 'New Orders',
    value: '24',
    icon: 'shopping_cart',
    color: 'accent'
  },
  {
    title: 'Active Users',
    value: '1,020',
    icon: 'people',
    color: 'warn'
  },
  {
    title: 'Pending Orders',
    value: '15',
    icon: 'pending_actions',
    color: 'primary'
  }
];
public lineChartData = [
  {
    data: [10, 20, 30, 40],
    label: 'Series A',
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgba(255, 99, 132, 1)',
  }
];

public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
public lineChartOptions: any = {
  responsive: true
};
public lineChartColors: Array<any> = [
  { // grey
    backgroundColor: 'rgba(148,159,177,0.2)',
    borderColor: 'rgba(148,159,177,1)',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  },
  { // dark grey
    backgroundColor: 'rgba(77,83,96,0.2)',
    borderColor: 'rgba(77,83,96,1)',
    pointBackgroundColor: 'rgba(77,83,96,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(77,83,96,1)'
  }
];
public lineChartLegend = true;
public lineChartType:ChartType = 'line';

// Dummy data for Bar Chart
public barChartOptions: any = {
  scaleShowVerticalLines: false,
  responsive: true
};
public barChartLabels: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
public barChartType:ChartType = 'bar';
public barChartLegend = true;
public barChartData: any[] = [
  { data: [65, 59, 80, 81, 56, 55, 40], label: 'Sales' },
  { data: [28, 48, 40, 19, 86, 27, 90], label: 'Orders' }
];

  login(){
    this.router.navigate(['/auth/login'])
  }

  logout(){
    this.router.navigate(['/auth/login']) 
  }

  openSearchDialog(){
    const dialogRef = this.dialog.open(SearchDialogComponent, {
      width: '1000px',  // Set fixed width
      height: '300px', // Set fixed height
      position: { bottom: '0px' }, // Fix the dialog at the bottom
      panelClass: 'custom-dialog-container' // Optional: for additional styles
    });

    dialogRef.afterClosed().subscribe(result => {
     
    });
  }

  displayedColumns: string[] = [
     'first_name',
     'blood_group',
     'gender',
     'zipcode'
  ];
  data=[
 {   first_name:'Jeetain',
    blood_group:'O+',
    gender:'male',
    zipcode: '143001'
  }
  ]
  columnsToDisplay: string[] = this.displayedColumns.slice();
  addPatient() {
    const dialogRef = this.dialog.open(AddPatientsDialogComponent, {
      width: '500px',
      height: '652px'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.data.push(result);
        this.data = [...this.data]; // Trigger change detection
      }
    });
  }
  
  checkOrder=false
  checkOrders(){
    const dialogRef = this.dialog.open(OrdersComponent, {
      width: '400px',  
      height: '150px',
      position: { top: '82px',left:'65%' }, 
      panelClass: 'custom-order-container'
    }); 
  
    dialogRef.afterClosed().subscribe(result => {
      
    });
  }
  
  displayedMedicineColumns: string[] = [
    'content',
    'medicine_name',
    'packing_size',
    'price',
    'Preview',
  ];
  dataMedicine = [
    {
      available_for_patient: "yes",
      content: "Losartan (50mg)",
      discontinued: "no",
      dosage_type: "",
      gst_percentage: "5",
      manufacturer_name: "Unisharp Pharmaceuticals",
      medicine_id: '[gv0GokYn9w4zFL51eouS2g==]',
      medicine_name: "Ltk",
      medicine_type: "otc",
      mrp: "324",
      packing_size: "1 Strip of 000 Tablet",
      price: "324",
      schedule_type: "H",
      size: "1"
    }
  ];
  
  columnsMedicineToDisplay: string[] = this.displayedMedicineColumns.slice();
     
  onPreview(element: any){
    const dialogRef = this.dialog.open(ViewMedicineComponent, {
       data:{"medicine_id":element.id}
    });
  }
}
