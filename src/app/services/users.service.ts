import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interface/userInterface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  private users: Array<User> = [ 
    {username:"Chuck", password: 'chuck'},
    {username:"Willie", password: 'willie'},
    {username: "Alec", password: 'alec'},
  ];
  


  
  constructor(private router: Router) { }

  login(username: string, password: string){
    // make sure it matches with username and password by filtering
    let userByName = this.users.filter(user => user.username === username && user.password === password)
    // this is saying the array matches with the filter.
    if (userByName.length === 1){
    // navigate to the home page because log in was succesful 
    this.router.navigate(['/home-page']);
    }
  }

  // function for sign up (think logically for what I have and how the process needs to be)
  singup(username: string, password: string) {
    // see if username exists by filtering
    let userByName = this.users.filter(user => user.username === username);
    if(userByName.length === 0){
    // add username and password to list(push)
    this.users.push({username, password})

    // have users auto login
    this.login(username, password);
    }
  }


}
