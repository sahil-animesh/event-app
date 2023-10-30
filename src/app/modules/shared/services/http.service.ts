import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor (private http : HttpClient) { 
    
  }

  get(api:string,params:any){
      return this.http.get(`${enviroment.URL}${api}`,params)
  }

  post(api:string,data:any,params:any={}){
       return this.http.post(`${enviroment.URL}${api}`,data,params)
  }
}
