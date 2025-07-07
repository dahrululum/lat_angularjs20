import { DatePipe, JsonPipe, LowerCasePipe, NgClass, NgStyle, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-att-directive',
  imports: [NgClass, NgStyle,UpperCasePipe,LowerCasePipe,TitleCasePipe,SlicePipe,JsonPipe,DatePipe],
  templateUrl: './att-directive.html',
  styleUrl: './att-directive.css'
})
export class AttDirective implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    div1ClassName = signal<string>("");
    isDiv2Green: boolean = false;

    firstName:string = "Dahrul";
    courseName:string = "Angular 20 tutorial";
    rollNoList = [11,12,13,14,15,16,17];

    studenObj:any = {
      name:'Dahrul',
      city:'Pkp',
      state:'INA'
    }

    currentDate :Date = new Date();

    constructor(){

    }

    ngOnInit(): void {
      console.log("ngOnInit")
      //to trigger api calls
      //to subscribe

    }
    ngAfterContentInit(): void {
      console.log("ngAfterContentInit")
    }
    ngAfterContentChecked(): void {
      console.log("ngAfterContentChecked")
    }
    ngAfterViewInit(): void {
      console.log("ngAfterViewInit")
      //to deal with viewChild
      //subscribe
    }
    ngAfterViewChecked(): void {
      console.log("ngAfterViewChecked")
    }
    ngOnDestroy(): void {
      console.log("ngOnDestroy")
      //unsubscribe
      //restrict use from navigating
    }



    setBgClass(className: string){
      this.div1ClassName.set(className);
    }
    toggleDiv2Color(){
      this.isDiv2Green =! this.isDiv2Green;
    }
}
