import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  date = new Date();
  day = this.date.getDate();
  month = this.date.getMonth() + 1;
  year = this.date.getFullYear();
  // hours = this.date.getHours() % 12 || 12;
  // minutes = this.date.getMinutes();

  constructor() { }

  ngOnInit() {
  }

}

