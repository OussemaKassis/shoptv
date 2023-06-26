import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import $ from 'jquery';

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.scss']
})
export class PageLayoutComponent implements OnInit {

  free : string = '5';
  constructor(private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('company') == 'true'){
      $('.cc-container').addClass('denns');
      $('#logo').addClass('denns');
      $('#logo').attr('src','/assets/img/denns.png');
    }

    if(localStorage.getItem('role') !== 'companyadmin') {
      $('.company-admin').addClass('hidden');
    }

    this.free = localStorage.getItem('tries');
    if(!localStorage.getItem("token") == true) {
      this.router.navigate(['./auth/login']);
    }
  }

  logOut() {
    localStorage.removeItem("token");
    this.router.navigate(['./auth/login']);


  }

  toggleMenu() {
    $(".mrtf").toggleClass('hidden')
  }
}
