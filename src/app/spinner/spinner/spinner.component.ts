
import { Component } from '@angular/core';
import {  MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { SpinnerHandlerService } from 'src/app/services/interceptors/spinner-handler.service';
@Component({
  selector: 'spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  standalone:true,
  imports:[MatProgressSpinnerModule,CommonModule]
})
export class SpinnerComponent {
  spinnerActive: boolean = true;

  constructor(
    public spinnerHandler: SpinnerHandlerService
  ) {
    this.spinnerHandler.showSpinner.subscribe(this.showSpinner.bind(this));
  }

  showSpinner = (state: boolean): void => {
    this.spinnerActive = state;
  };
}
