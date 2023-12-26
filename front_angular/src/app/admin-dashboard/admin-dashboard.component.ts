import { Component ,OnInit} from '@angular/core';
import { MenuServiceService } from '../service/menu-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent implements OnInit {
  constructor(private Router:Router,private MenuServiceService:MenuServiceService,private ActivatedRoute:ActivatedRoute){}
  menus:any;
  message="";
  ngOnInit(): void {
      this.getMenu();
      this.ActivatedRoute.queryParams.subscribe((params)=>{
        if(params['message']){
          this.message=params['message'];
          setTimeout(()=>
                 {
                 this.Router.navigate([], { queryParams: {} });
                 this.message="";
            },3000);
        }
      })
  }

  getMenu(){
    this.MenuServiceService.getAll().subscribe((res:any)=>{
       this.menus=res.data;
    })
  }

  DeleteMenu(id:any){
    this.MenuServiceService.DeleteMenu(id).subscribe((res:any)=>{
      this.getMenu();
      this.message="Delete Item Successfully";
      setTimeout(()=>
             {
             location.reload();
             this.message="";
        },3000);
    })
  }
}
