import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'',component:DashboardComponent},
  // {path:'',component:HomeComponent,canActivate:[CourseGuardService]},
  // {path:'admin',component:AdminComponent,canActivate:[AdminGuardService,CourseGuardService]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
