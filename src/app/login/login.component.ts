import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginWithOTPSelected: boolean = false;
  mobileNumber:string='';
  otp:string='';
  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.username, this.password);

    if (this.authService.isLoggedIn) {
      if(this.username=='user'&&this.password=='password')
            this.router.navigate(['/home']);
      else
            alert("Error")
    }
  }
  loginWithOTP(){
    // this.loginWithOTPSelected=true;
    this.loginWithOTPSelected = !this.loginWithOTPSelected;
    alert("login with otp");
  }
  
}
