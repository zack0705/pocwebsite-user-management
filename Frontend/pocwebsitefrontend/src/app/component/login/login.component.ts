import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  loginFormModel: any = {};
  email:string='';
  pass:string='';
  dbpass:string='';
  userValid:boolean=true;
  loginSuccessfull: boolean=true;
  constructor(private router: Router,private userService:UserService) { }

  login() {
    // Handle login logic and authentication
    // Redirect to user list page on successful login
    this.email = this.loginFormModel.email;
    this.pass = this.loginFormModel.password;
    
    const cred:{email:string, pass:string} = {email: this.email,pass: this.pass}
    this.userService.isAuthenticated(cred).subscribe(
      (value) => {
        console.log('hello',value);
        if(value.valid==null){
          this.userValid=false;
        }
        if(value.valid.isValid){
          this.userService.setToken(value.token)
          this.router.navigate(['/users']);
          
        }else{
          this.loginSuccessfull=false
          this.router.navigate(['/login'])
        }
      }
    )
  }
}
