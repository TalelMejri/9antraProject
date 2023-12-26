import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './Layout/home-component/home-component.component';
import { MenuComponentComponent } from './Layout/menu-component/menu-component.component';
import { ContactComponentComponent } from './Layout/contact-component/contact-component.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SideBarAdminComponent } from './Layout/side-bar-admin/side-bar-admin.component';
import { AddMenuCompComponent } from './add-menu-comp/add-menu-comp.component';
import { UpdateMenuCompComponent } from './update-menu-comp/update-menu-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    MenuComponentComponent,
    ContactComponentComponent,
    AdminDashboardComponent,
    SideBarAdminComponent,
    AddMenuCompComponent,
    UpdateMenuCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
