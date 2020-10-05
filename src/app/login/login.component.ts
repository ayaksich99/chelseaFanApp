import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup

  constructor(private usersservice: UsersService, private fb: FormBuilder) { }
  login(){
    if (this.loginForm.valid){
      this.usersservice.login(this.loginForm.get("username").value, this.loginForm.get("password").value);
    }
  }
  


  ngOnInit(): void {
    // Validators here for username and password
    this.loginForm = this.fb.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(16)])]
    });
  }

}
