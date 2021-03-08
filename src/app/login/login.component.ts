import { Component, OnInit } from '@angular/core';
import { ApirestService } from '../apirest.service';
import { LoginI } from '../modelo/login.interface';
import { FormGroup,FormControl,Validators }  from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  })

  constructor(private userService: ApirestService,private router: Router) { }

  ngOnInit(): void {
  }

  

  signInUser(form: LoginI){
    this.userService.loginUser(form).subscribe(data=>{
      console.log(data);
      this.returnHome();
    })
  }

  returnHome(){
    this.router.navigate(['/']);
  }

}
