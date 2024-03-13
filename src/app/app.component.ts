import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
  //Sidebar toggle show hide function
status = false;
addToggle()
{
  this.status = !this.status;
}
}
