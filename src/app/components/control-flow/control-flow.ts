import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css'
})
export class ControlFlow {
  isParaVisible:boolean =false;
  startMonthName:string = "feb";
  citylist:string[] = ["Pkp","Sungailiat","Koba"];
  studentList:any[] = [
    {name :'AAA', city:'bandung', isActive:false},
    {name :'BBB', city:'jakart', isActive:true},
    {name :'CCC', city:'koba', isActive:false},
    {name :'DDD', city:'sungailiat', isActive:true},
  ]

  showP(){
    this.isParaVisible = true;
  }
  hideP(){
    this.isParaVisible = false;
  }

}
