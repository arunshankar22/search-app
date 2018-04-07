import { Component, OnInit } from '@angular/core';
import { users } from './app.users';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public data: any[] = users;

  constructor() { }

  ngOnInit() {
  }

}
