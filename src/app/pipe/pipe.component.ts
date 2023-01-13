import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit{
  whatDate:string | undefined ;
  text:string | undefined

  constructor(){}
  ngOnInit(): void {
    this.whatDate=new Date().toDateString();
    this.text= 'Hello World'
  }

}
