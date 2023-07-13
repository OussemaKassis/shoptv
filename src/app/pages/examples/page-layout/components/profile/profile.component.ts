import { Component, OnInit } from '@angular/core';
import $ from 'Jquery';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  address: string = '';
  phone: string = '';

  constructor() { }

  ngOnInit(): void {
    this.firstName = localStorage.getItem('firstName');
    this.lastName = localStorage.getItem('lastName');
    this.email = localStorage.getItem('email');
    this.address = localStorage.getItem('address');
    this.phone = localStorage.getItem('phone');
  }

  update() {
    $('.loading').attr("disabled","disabled");
    $('.loading').removeClass('hidden');

    setTimeout(() => {
      $('.loading').addClass('hidden');
      localStorage.setItem('firstName', this.firstName);
      localStorage.setItem('lastName', this.lastName);
      localStorage.setItem('address', this.address);
      localStorage.setItem('phone', this.phone);

    }, 1000);
  }

}
