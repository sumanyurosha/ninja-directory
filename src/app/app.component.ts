import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
//  directives: [HomeComponent, ROUTER_DIRECTIVES]
})
export class AppComponent {
  title = 'app works!';
  name = 'Sumanyu';
  appObject = {
    name: "Junnu",
    belt: "green"
  }
  yell(e){
    alert("I m yelling!");
  }
}
