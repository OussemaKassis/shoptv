import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  list: {
    id:number;
    name: string;
    type: string;
  }[] = [{id:0,name:"headline text",type:"text"},{id:1,name:"product image",type:"image"}];

  constructor() { }

  ngOnInit(): void {
  }

}
