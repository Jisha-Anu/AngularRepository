import { Component,Input,Output } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
//import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-blog';
  firstname="Sachin";
  lastname="Tendulkar";


  //property Binding
  isDisabled = false;//change to true for component communicating with html file
  title1 ="Binding Type";
  classtype= "text-danger";
  Simple="Simplilearn";
  //image="./assets/img1.jpg;"

  //event Binding
  title2="Event Binding";
  Clickme(event: any){
    alert("Welcome to simplelearn");
  }
    //two way message
    //message: string= '';
    value="";
  clearValue(){
    this.value= "";
  }

}
