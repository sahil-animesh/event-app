import { Injectable } from '@angular/core';
import { GraphqlService } from './graph-ql.service';
import { MUTATION } from '../graphql/mutations/user.mutation';
import { USER_AUTH, VALIDATE_OTP } from '../constant-files/interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private graph: GraphqlService
  ) { }

  /**
   * 
   * @param data | Payload of the request containing User Credentials
   * @returns 
   */
  getOTP(data: USER_AUTH) {
    return this.graph.mutate(MUTATION.AUTH.CREATE_USER,data);
  }
  
  /**
   * 
   * @param data | payload with user OTP
   * @returns 
   */
  validateOTP(data: VALIDATE_OTP) {
    return this.graph.mutate(MUTATION.AUTH.CREATE_USER,data);
  }
}
