import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EventService } from 'src/app/services/events/event.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  ordersArray: Array<any> = [];

  constructor(
    private eventService: EventService,
    public dialogRef: MatDialogRef<OrdersComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: any
  ) {
    console.log("Dialog Data on load: ", this.dialogData);

    // Store dialogData in localStorage with JSON.stringify
    if (this.dialogData) {
      localStorage.setItem('cartItems', JSON.stringify(this.dialogData));
      console.log("Stored data in localStorage: ", localStorage.getItem('cartItems'));
    }

    // Retrieve the data from localStorage
    const storedData = localStorage.getItem('cartItems');
    console.log("Data from localStorage on page load: ", storedData);

    if (storedData) {
      try {
        // Parse the stored data back into its original form
        const parsedData = JSON.parse(storedData);
        console.log("Parsed stored data: ", parsedData);

        // Assign the parsed data to ordersArray
        if (Array.isArray(parsedData)) {
          this.ordersArray = parsedData;
        } else if (parsedData && typeof parsedData === 'object') {
          this.ordersArray = [parsedData];
        }
      } catch (error) {
        console.error("Error parsing stored data: ", error);
      }
    }
  }
}
