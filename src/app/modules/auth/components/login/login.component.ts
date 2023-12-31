import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { REGEX } from '../../../shared/constant-files/constant';
import { GraphqlService } from 'src/app/modules/shared/services/graph-ql.service';
import { AuthService } from 'src/app/modules/shared/services/auth.service';
import { Router } from '@angular/router';
import { PATHS } from 'src/app/modules/shared/constant-files/routing-paths';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  otpForm!: FormGroup | any;
  isLoginForm: boolean = true;
  otpFormSubmitted = false;
  loginFormSubmitted = false;
  otpConfig = {
    length:6 ,
    allowNumbersOnly: true
  }

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router:Router
  ) {}

  ngOnInit() {
    this.initialiseForm();
  }
  
  /**
   * below function is implemented to initailise the form
   */
  initialiseForm() {
    this.loginForm = this.fb.group({
      contact_number: ["",[Validators.required,Validators.pattern(REGEX.PHONE_NUMBER)]]
    })

    this.otpForm = this.fb.group({
      otp: ['',[Validators.required]]
    })
  }

  /** 
   * this function is implemented to get OTP 
   */
  getOTP() {
    if(this.loginForm.valid) {
      this.authService.getOTP(this.loginForm.value).subscribe((res: any) => {
        localStorage.setItem('token',res?.data)
        this.isLoginForm=false;
      })
    }
  }

  /**
   * function implemented to validate the OTP
   */
  validateOTP() {
    if(this.otpForm.valid) {
      this.authService.validateOTP(this.otpForm.value).subscribe((res: any) => {
        localStorage.setItem('token',res.data);
        this.router.navigateByUrl(PATHS.USER.REGISTER)
      })
    }
  }
}
