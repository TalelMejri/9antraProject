import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {

  port:String="http://localhost:8000"
  
  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(`${this.port}/getAll`);
  }

  AddMenu(Menu:any){
    return this.http.post(`${this.port}/AddMenu`,Menu);
  }

  DeleteMenu(id:any){
    return this.http.delete(`${this.port}/DeleteMenu?id=${id}`);
  }

  UpdateMenu(Menu:any,id:any){
    return this.http.put(`${this.port}/UpdateMenu?id=${id}`,Menu);
  }
  
  GetById(id:any){
    return this.http.get(`${this.port}/GetById?id=${id}`);
  }

}
