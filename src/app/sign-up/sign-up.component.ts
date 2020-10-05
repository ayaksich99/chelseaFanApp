import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup

  constructor(private usersservice: UsersService, private fb: FormBuilder) { }
  signup(){
      // If username and password are valid
      if (this.signupForm.valid){
        this.usersservice.singup(this.signupForm.get("username").value, this.signupForm.get("password").value);
      }
      // get username and password HERE
  }
  ngOnInit(): void {
    // Validators for signup.
    this.signupForm = this.fb.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(16)])]
    })
  }

}
