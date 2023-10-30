import { Injectable } from '@angular/core';
import { USER_AUTH, VALIDATE_OTP } from '../constant-files/interfaces/auth';
import { HttpService } from './http.service';
import { APIS } from '../constant-files/constant';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpService:HttpService
  ) { }

  /**
   * 
   * @param data | Payload of the request containing User Credentials
   * @returns 
   */
  getOTP(data: USER_AUTH) {
    return this.httpService.post(APIS.AUTH.LOGIN,data);
  }
  
  /**
   * 
   * @param data | payload with user OTP
   * @returns 
   */
  validateOTP(data: VALIDATE_OTP) {
    return this.httpService.post(APIS.AUTH.VERIFY_OTP,data)
  }
}
