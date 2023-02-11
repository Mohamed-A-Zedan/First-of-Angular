import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private myClient:HttpClient) { }
  private myUrl= "https://jsonplaceholder.typicode.com";
  getAll(){
    return this.myClient.get(this.myUrl+"/"+"users")
  }
  getById(id:any){
    return this.myClient.get(this.myUrl+"/"+"users"+"/"+id)
  }
  updateById(id:any,updatedUser:any){
    return this.myClient.put(this.myUrl+"/"+"users",updatedUser)
  }
}
