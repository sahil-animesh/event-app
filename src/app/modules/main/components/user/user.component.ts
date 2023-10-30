import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { APIS, REGEX } from 'src/app/modules/shared/constant-files/constant';
import { PATHS } from 'src/app/modules/shared/constant-files/routing-paths';
import { HttpService } from 'src/app/modules/shared/services/http.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  registrationForm: any;


  constructor(
    private fb:FormBuilder,
    private httpService:HttpService,
    private router:Router
    ) { 
    this.registrationForm = this.fb.group({
      name: ["",[Validators.required,Validators.pattern(REGEX.USER_NAME)]],
    })

  }
  register(){
    this.httpService.post(APIS.AUTH.USER_NAME,this.registrationForm.value).subscribe((response:any)=>{
      // this.router.navigateByUrl(PATHS.)
    })
  }
  ngOnInit(): void {
  }

}
