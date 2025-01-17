import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-card-form',
  templateUrl: './credit-card-form.component.html',
  styleUrls: ['./credit-card-form.component.scss']
})
export class CreditCardFormComponent implements OnInit {

  planPrice;
  planName;
  constructor() { }

  ngOnInit(): void {
    this.planPrice = localStorage.getItem('price');
    this.planName = localStorage.getItem('planName');
  }

}
