import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.scss']
})
export class PageLayoutComponent implements OnInit {

  free : string = '5';
  constructor() { }

  ngOnInit(): void {
    this.free = localStorage.getItem('tries');
  }

}
