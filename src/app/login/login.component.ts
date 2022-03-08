import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from "ngx-cookie-service";
import { User } from '../models/User';
import { ShareStateService } from "../services/share-state.service";
import { AuthenticateUserService } from '../services/authenticate-user.service';
import { Authentication } from '../models/Authentication';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  err!: string;
  userInput: User = {
    userName: '',
    userPassword: ''
  }

  constructor(private router: Router, private cookies: CookieService, 
    private shareState: ShareStateService, 
    private authenticateUser: AuthenticateUserService) { }

  ngOnInit(): void { 
    const cookiesUserInput = {
      userName: this.cookies.get('user_name'),
      userPassword: this.cookies.get('user_password')
    }
    this.shareState.authenticateCookiesUserSubscription = this.authenticateUser.authenticationRequest(cookiesUserInput).subscribe((authenticationResult: Authentication)=>{
      this.shareState.authenticationResult = authenticationResult
      if (authenticationResult.isAuthenticated) {
        this.shareState.authenticateCookiesUserSubscription.unsubscribe();
        this.router.navigateByUrl('/refresh-config')
      }
    })
  }

  checkAuth(){
    this.shareState.authenticateUserSubscription = this.authenticateUser.authenticationRequest(this.userInput).subscribe((authenticationResult: Authentication)=>{
      if (authenticationResult.isAuthenticated){
        this.shareState.authenticationResult = authenticationResult
        this.cookies.set('user_name', this.userInput.userName);
        this.cookies.set('user_password', this.userInput.userPassword);
        this.shareState.authenticateUserSubscription.unsubscribe();
        this.router.navigateByUrl('/refresh-config')
        
      }
      else {
        this.err = 'Incorrect username or password'
      }
    })
  }
}
