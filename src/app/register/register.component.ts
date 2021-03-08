import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ApirestService } from '../apirest.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User();

  constructor(private userService: ApirestService,
            private router: Router) { }

  ngOnInit(): void {
  }

  saveUser(){
    this.userService.registerUser(this.user).subscribe(data=> {
      console.log(typeof data);
      this.returnHome();
    });
  }

  returnHome(){
    this.router.navigate(['/']);
  }

  onSubmit(){
    this.saveUser();
  }

}
