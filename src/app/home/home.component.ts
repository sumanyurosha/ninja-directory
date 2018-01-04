import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() homeObject;
  @Output() onYell = new EventEmitter();

  homeTitle = 'Welcome to Home!';
  myString = 'I love chicken';
  myBoolean = 'true';
  object = { name:"Sumanyu",
             belt:"Black"};
  alertMe(){
    alert("You just clicked a button!");
  }

  fireYellEvent(e){
    this.onYell.emit(e);
    console.log(e);
  }
  constructor() { }

  ngOnInit() {
  }

}
