import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule,FormControl,FormGroup,Validators} from '@angular/forms';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'stu-recactive-form';

  form=new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(3)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    body: new FormControl('',Validators.required)
  });

  get f()
  {
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
  }
 
}

