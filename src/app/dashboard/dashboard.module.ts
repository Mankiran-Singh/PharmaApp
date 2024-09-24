import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerInterceptorService } from '../services/interceptors/spinner-interceptor.service';
import { NavbarComponent } from './navbar/navbar.component';
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

@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    SearchDialogComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatMenuModule,
    MatTableModule,
    MatDialogModule,
    MatCardModule,
    MatGridListModule,
    
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptorService, multi: true }],
})
export class DashboardModule { }
