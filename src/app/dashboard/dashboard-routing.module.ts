import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CourseGuardService } from '../services/guards/course-guard.service';

const routes: Routes = [
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'',component:DashboardComponent,canActivate:[CourseGuardService]},
  // {path:'',component:HomeComponent,canActivate:[CourseGuardService]},
  // {path:'admin',component:AdminComponent,canActivate:[AdminGuardService,CourseGuardService]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
