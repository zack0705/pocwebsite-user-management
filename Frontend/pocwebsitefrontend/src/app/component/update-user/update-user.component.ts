import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  userId!: number;
  updateUserFormModel: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = +params['id'];
      //this.getUserDetails();
    });
  }

  // getUserDetails() {
  //   this.userService.getUser(this.userId).subscribe(user => {
  //     this.updateUserFormModel = user;
  //   });
  // }

  updateUser() {
    this.userService.updateUser(this.userId, this.updateUserFormModel).subscribe(response => {
      // Handle success response
      console.log('User updated successfully:', response);
      this.router.navigate(['/login']); // Redirect to login page
    }, error => {
      // Handle error response
      console.error('Error updating user:', error);
      // Optionally, you can display an error message to the user
    });
  }
}
