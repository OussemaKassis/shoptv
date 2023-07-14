import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import $ from 'jquery';

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.scss']
})

export class PageLayoutComponent implements OnInit {
  size: string= '0.00';
  firstName : string = "";
  lastName : string = "";
  free : string = '5';
  constructor(private router: Router) { }

  ngOnInit(): void {

    if(localStorage.getItem('templateAdded') == 'true' && localStorage.getItem('videoGenerated') == 'false') {
      this.size = '9.58';
    }
    if(localStorage.getItem('templateAdded') == 'true' && localStorage.getItem('videoGenerated') == 'true') {
      this.size = '49.15';
    }
    this.firstName = localStorage.getItem('firstName');
    this.lastName = localStorage.getItem('lastName');

    if(localStorage.getItem('company') == 'true'){
      $('.cc-container').addClass('denns');
      $('#logo').addClass('denns');
      $('#logo').attr('src','/assets/img/denns.png');
      $('.m-no-company').hide();
    }

    if(localStorage.getItem('firstLogin') == 'true'){
      $('.alert1').removeClass('hidden');
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
