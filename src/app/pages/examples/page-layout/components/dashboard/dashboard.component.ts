import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.item1').removeClass('active');
    $('.item2').removeClass('active');
  }

}
