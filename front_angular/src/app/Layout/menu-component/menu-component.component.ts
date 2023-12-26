import { Component,OnInit } from '@angular/core';
import { MenuServiceService } from '../../service/menu-service.service';

@Component({
  selector: 'app-menu-component',
  templateUrl: './menu-component.component.html',
  styleUrl: './menu-component.component.scss'
})
export class MenuComponentComponent implements OnInit {
  constructor(private MenuServiceService:MenuServiceService){}

  menus:any;
  ngOnInit(): void {
    this.getMenu();
}

getMenu(){
  this.MenuServiceService.getAll().subscribe((res:any)=>{
     this.menus=res.data;
  })
}
}
