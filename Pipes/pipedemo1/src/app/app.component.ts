import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatePipe } from '@angular/common';
import { CustomhelloPipe } from './customhello.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DatePipe,CustomhelloPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pipedemo1';
  x= new Date(2024,7,3,13,1,1);

  students=[
    {studId:1,name:"Raghav",gender:0},
    {studId:2,name:"Jinisha",gender:1},
    {studId:3,name:"Madhav",gender:0}

  ]
}
