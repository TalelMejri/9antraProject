import { Component } from '@angular/core';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrl: './preloader.component.scss'
})
export class PreloaderComponent {
  preloader=true;
  constructor(){
    setTimeout(()=>this.preloader=false,2000);
  }
}
