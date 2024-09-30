import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerInterceptorService } from '../services/interceptors/spinner-interceptor.service';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatSelectModule} from '@angular/material/select'
import {MatMenuModule} from '@angular/material/menu'
import {MatTableModule} from '@angular/material/table';
import { SearchDialogComponent } from './search-dialog/search-dialog.component'
import {MatDialogModule} from '@angular/material/dialog'
import {MatCardModule} from '@angular/material/card'
import {MatGridListModule} from '@angular/material/grid-list'
import { ChartsModule } from 'ng2-charts';
import { AddPatientsDialogComponent } from './add-patients-dialog/add-patients-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { ViewMedicineComponent } from './view-medicine/view-medicine.component';
import { OrdersComponent } from './orders/orders.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PlaceOrderComponent } from './place-order/place-order.component';
@NgModule({
  declarations: [
    DashboardComponent,
    SearchDialogComponent,
    AddPatientsDialogComponent,
    ViewMedicineComponent,
    OrdersComponent,
    PlaceOrderComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatMenuModule,
    MatTableModule,
    MatDialogModule,
    MatCardModule,
    MatGridListModule,
    ChartsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatTooltipModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptorService, multi: true }],
})
export class DashboardModule { }
