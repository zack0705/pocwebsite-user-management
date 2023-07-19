import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registrationFormModel: any = {};
  registrationSuccess: boolean = false;

  constructor(private userService: UserService, private router: Router) { }

  registerUser() {
    this.userService.registerUser(this.registrationFormModel).subscribe(response => {
      // Handle success response
      console.log('User registered successfully:', response);
      this.registrationSuccess = true;
      this.userService.setToken(response.token)
      // Optionally, you can redirect to a success page or display a success message
    }, error => {
      // Handle error response
      console.error('Error registering user:', error);
      // Optionally, you can display an error message to the user
    });
  }

  redirectToLink(routePath: string) {
    this.router.navigateByUrl(routePath);
  }
}
