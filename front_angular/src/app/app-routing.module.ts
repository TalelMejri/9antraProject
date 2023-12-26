import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './Layout/home-component/home-component.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddMenuCompComponent } from './add-menu-comp/add-menu-comp.component';
import { UpdateMenuCompComponent } from './update-menu-comp/update-menu-comp.component';

const routes: Routes = [
  {path:'',component:HomeComponentComponent},
  {path:'admin',component:AdminDashboardComponent},
  {path:'Add',component:AddMenuCompComponent},
  {path:'update/:id',component:UpdateMenuCompComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
