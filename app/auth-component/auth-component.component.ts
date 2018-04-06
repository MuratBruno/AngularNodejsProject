import { Component} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,NgModel  } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth-component.component.html',
  styleUrls: ['./auth-component.component.css']
})
export class AuthComponentComponent  {

  private login: string;
  private pass: string;
  private isLoggedIn:boolean=false;

  onSubmit(Login:string) {
	  this.isLoggedIn = true;
	  this.login=Login;
  }

  logout(){
		this.isLoggedIn = false;
  }
}
