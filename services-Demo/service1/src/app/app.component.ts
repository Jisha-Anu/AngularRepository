import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoService } from './demo.service';
import { response } from 'express';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  posts:any;
  constructor(private service:DemoService){}
 
  ngOnInit(){
    //throw new Error('Method not implemented.');
    this.service.getPosts().subscribe(response=>{this.posts=response});
  }
  title = 'service1';
}
