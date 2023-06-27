import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  setPrice(price: string,name : string) {
    localStorage.setItem('price',price);
    localStorage.setItem('planName',name);
    
  }
}
