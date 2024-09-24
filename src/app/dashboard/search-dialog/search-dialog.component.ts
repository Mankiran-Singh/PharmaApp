import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, filter, fromEvent, switchMap } from 'rxjs';
import { HttpRequestService } from 'src/app/services/http-requests/http-request.service';
interface Medicine {
  available_for_patient: string;
  content: string;
  discontinued: string;
  dosage_type: string;
  gst_percentage: string;
  manufacturer_name: string;
  medicine_id: string;
  medicine_name: string;
  medicine_type: string;
  mrp: string;
  packing_size: string;
  price: string;
  schedule_type: string;
  size: string;
}
@Component({
  selector: 'app-search-dialog',
  templateUrl: './search-dialog.component.html',
  styleUrls: ['./search-dialog.component.scss']
})
export class SearchDialogComponent {
  constructor(private readonly httpService:HttpRequestService,private router:Router,
    public dialogRef: MatDialogRef<SearchDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData:any,
  ){}
  displayedColumns: string[] = [
    'content',
    // 'discontinued',
    // 'dosage_type',
    // 'gst_percentage',
    'manufacturer_name',
    'medicine_name',
    'medicine_type',
    // 'mrp',
    'packing_size',
    'price',
    'Preview',
    'Order',
    // 'schedule_type',
    // 'size',
    // 'available_for_patient',
  ];
  data = [
    {
      available_for_patient: "yes",
      content: "Lolas (9mg)",
      discontinued: "no",
      dosage_type: "",
      gst_percentage: "5",
      manufacturer_name: "Unisharp Pharmaceuticals",
      medicine_id: "vDsnSH4QSC426FMYtFKNDw==",
      medicine_name: "Ltk",
      medicine_type: "otc",
      mrp: "324",
      packing_size: "1 Strip of 000 Tablet",
      price: "324",
      schedule_type: "H",
      size: "1"
    }
  ];
  
  columnsToDisplay: string[] = this.displayedColumns.slice();
  
  @ViewChild('input') input!: ElementRef;
  
    ngAfterViewInit() {
      fromEvent(this.input.nativeElement, 'keyup')
        .pipe(
          filter(Boolean), // Ensures the event is valid (not null/undefined)
          debounceTime(150), // Delays the event stream for 150ms
          distinctUntilChanged(), // Only proceed if the value has changed
          switchMap(async () => this.search(this.input.nativeElement.value)) // API call
        )
        .subscribe(response => {
          // console.log('API Response:', response);
        });
    }
  
    search(searchstring: string) {
      this.httpService.search(searchstring).subscribe((res) => {
        if (res && res.data && res.data.result && res.data.result.length > 0) {
          this.data = res.data.result;
        } else {
          this.data = []; // Set data to an empty array if no results
        }
      });
    }
    
  onPreview(element: any){
    console.log(element)
  }
  onPlaceOrder(element: any){
    console.log(element)
  }
}
