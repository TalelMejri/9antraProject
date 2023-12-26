import { Component,OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';
import { MenuServiceService } from '../service/menu-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-menu-comp',
  templateUrl: './update-menu-comp.component.html',
  styleUrl: './update-menu-comp.component.scss'
})
export class UpdateMenuCompComponent implements OnInit {
  constructor(private Router:Router,private formBuilder:FormBuilder,private menuService:MenuServiceService,private route:ActivatedRoute) {
    this.MenuForm=this.formBuilder.group({
      title:this.titleForm,
      prix:this.PrixForm,
    });
   
  }

  titleForm=new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(30)]);
  PrixForm=new FormControl('',[Validators.required]);

  MenuForm:FormGroup;

  getMenuById(id:any){
    this.menuService.GetById(id).subscribe((res:any)=>{
       this.PrixForm.setValue(res.data['prix']);
       this.image=res.data['image'];
       this.titleForm.setValue(res.data['title']);
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getMenuById(params['id']);
    });
  }

  getTitleError(){
    if(this.titleForm.touched){
      if(this.titleForm.hasError("required")){
        return 'You must enter a Title';
      } else if(this.titleForm.hasError("minlength")){
        return 'You must enter a valid Title';
      }else if(this.titleForm.hasError("maxlength")){
        return 'You must enter a valid Title';
      }
    }
    return '';
  }


  gePrixError(){
    if(this.PrixForm.touched){
      if(this.PrixForm.hasError("required")){
        return 'You must enter a Prix';
      }
    }
    return '';
  }

  image:String="";

  onFileChanged(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.image = reader.result as string;
    };
   
  }

  UpdateMenu(){
    if(this.MenuForm.valid){
      this.menuService.UpdateMenu(
        {
          "title": this.MenuForm.value['title'],
          "prix":this.MenuForm.value['prix'],
          "image":this.image
        },this.route.snapshot.params['id']
      ).subscribe((res)=>{
        this.Router.navigate(['/admin'],{queryParams:{message:"Item Updated"}});
         console.log(res);
      })
    }
    else{
      this.MenuForm.markAllAsTouched();
    }
  }

}
