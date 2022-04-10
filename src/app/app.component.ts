import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h2>Today is {{day}}</h2>
  <h2> {{a+b}}</h2>
  <h2> {{"Akhil "+"Banagiri"}}</h2>
  <h2> {{day.length}}</h2>
  <h2> {{day.toUpperCase()}}</h2>
  <h1> {{disp()}}</h1>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public day = "Tuesday";
  public a = 10;
  public b = 20;
  title = 'Test';
  disp(){
    return `Today is ${this.day}`;
  }
}
