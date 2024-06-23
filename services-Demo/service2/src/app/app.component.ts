import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  private calcservice = inject(CalculatorService)
  totalvalue = this.calcservice.add(200,100)
 


  title = 'service2';

 
 
 
}
