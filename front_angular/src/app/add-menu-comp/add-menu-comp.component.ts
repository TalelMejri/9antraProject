import { Component } from '@angular/core';
import { FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';
import { MenuServiceService } from '../service/menu-service.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-add-menu-comp',
  templateUrl: './add-menu-comp.component.html',
  styleUrl: './add-menu-comp.component.scss'
})

export class AddMenuCompComponent {

  constructor(private Router:Router, private formBuilder:FormBuilder,private menuService:MenuServiceService){
    this.MenuForm=this.formBuilder.group({
      title:this.titleForm,
      prix:this.PrixForm,
    });
  }

  titleForm=new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]);
  PrixForm=new FormControl('',[Validators.required]);

  MenuForm:FormGroup;

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

  AddMenu(){
    if(this.MenuForm.valid){
      this.menuService.AddMenu(
        {
          "title": this.MenuForm.value['title'],
          "prix":this.MenuForm.value['prix'],
          "image":this.image
        }
      ).subscribe((res)=>{
         this.Router.navigate(['/admin'],{queryParams:{message:"Item Added"}});
         this.MenuForm.reset();
         console.log(res);
      })
    }
    else{
      this.MenuForm.markAllAsTouched();
    }
  }

}
