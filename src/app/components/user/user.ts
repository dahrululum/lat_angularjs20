import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Master } from '../../services/master';
@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User implements OnInit {

  userList: any[] = [];
  userObj:any = {
    
  "userId": 0,
  "emailId": "",
  "password": "",
  "fullName": "",
  "mobileNo": ""
 
  }
  http = inject(HttpClient);
  masterService = inject(Master);
  // constructor(private master:Master) {
    
  // }


  ngOnInit(): void {
    this.getUsers();
    //debugger;
    const result = this.masterService.getSum(14,50);
    debugger;
    const AppName = this.masterService.appName;
  }

  getUsers(){
    // this.http.get("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers").subscribe((res:any)=>{
    //   this.userList = res;
    // });
    debugger;
    this.masterService.getUsers().subscribe((res:any)=>{
      debugger;
      this.userList = res;
    });
  }
  onSaveUser(){
    // this.http.post("https://api.freeprojectapi.com/api/GoalTracker/register",this.userObj).subscribe((result:any) => {
    //   alert("user add success");
    //   this.getUsers();
    // })
   // debugger;
    this.http.post("https://api.freeprojectapi.com/api/GoalTracker/register",this.userObj).subscribe({
      next:(result)=>{
        // debugger;
        alert("user created success");
        this.getUsers();
      },error:(err)=>{
     //   debugger;
        alert("Error : " + err.error);
      }
    })
  }
  onEditUser(item:any){
    this.userObj=item;
  }
  onUpdateUser(){
    debugger;
    this.http.put("https://api.freeprojectapi.com/api/GoalTracker/updateUser?id=" + this.userObj.userId, this.userObj).subscribe({
      next:(result)=>{
         debugger;
        alert("user updated success");
        this.getUsers();
      },error:(err)=>{
        debugger;
        alert("Error : " + err.error);
      }
    })
  }
  onReset(){
    this.userObj = {
    
    "userId": 0,
    "emailId": "",
    "password": "",
    "fullName": "",
    "mobileNo": ""
  
    }
  }
  onDeleteUser(id:number){
     debugger;
     const isdelet = confirm("are u sure want to delete this ID");
    if(isdelet){
      this.http.delete("https://api.freeprojectapi.com/api/GoalTracker/deleteUserById?id=" + id).subscribe({
      next:(result)=>{
        // debugger;
        alert("user delete success");
        this.getUsers();
      },error:(err)=>{
       // debugger;
        alert("Error : " + err.error);
      }
    })
    }
    
  }

}