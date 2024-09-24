import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, filter, fromEvent, switchMap, tap } from 'rxjs';
import { HttpRequestService } from 'src/app/services/http-requests/http-request.service';
import { SearchDialogComponent } from '../search-dialog/search-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
constructor(private readonly httpService:HttpRequestService,private router:Router,public dialog: MatDialog){}

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
public lineChartData: Array<any> = [
  { data: [65, 59, 80, 81, 56, 55, 40], label: 'Sales' },
  { data: [28, 48, 40, 19, 86, 27, 90], label: 'Orders' }
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
public lineChartType = 'line';

// Dummy data for Bar Chart
public barChartOptions: any = {
  scaleShowVerticalLines: false,
  responsive: true
};
public barChartLabels: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
public barChartType = 'bar';
public barChartLegend = true;
public barChartData: any[] = [
  { data: [65, 59, 80, 81, 56, 55, 40], label: 'Sales' },
  { data: [28, 48, 40, 19, 86, 27, 90], label: 'Orders' }
];

  login(){
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
      // console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}
