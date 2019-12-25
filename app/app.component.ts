import { Component,  OnInit  } from '@angular/core';
import { faCoffee, faEyeSlash, faEye, faUser  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'dateapp';
  public greeting = "";
  public passwordShown: boolean = false;
  public passwordType = 'password';
  visible: boolean = false;  
  faEyeSlash = faEyeSlash;
  faEye = faEye;
  faCoffee = faCoffee; 
  faUser = faUser; 

  constructor(    
  ) { }

  onClick(event){
   console.log(event);    
    if(this.passwordShown){
      this.passwordShown = false;
      this.passwordType = 'password';      
    }else{
      this.passwordShown = true;
      this.passwordType = 'text';      
    } 
  } 

  ngOnInit() {
   
  }
}
