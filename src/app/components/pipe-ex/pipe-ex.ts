import { DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NaPipe } from '../../pipes/na-pipe';

@Component({
  selector: 'app-pipe-ex',
  imports: [UpperCasePipe,LowerCasePipe, TitleCasePipe,DatePipe,JsonPipe,NaPipe],
  templateUrl: './pipe-ex.html',
  styleUrl: './pipe-ex.css'
})
export class PipeEx {
  courseName = "angular";
  courseDuration = "Duration is 4 mOnth";

  courseDate:Date = new Date();
  studentObj:any = {
    name:'AAA',
    mobile:'1112222',
    address:{
      city:'pkp',
      state:'babel'
    }
  }
}
