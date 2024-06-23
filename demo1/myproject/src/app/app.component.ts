import { Component } from '@angular/core';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})


export class AppComponent {
  title = 'myproject';
}
