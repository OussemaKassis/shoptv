import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instagram-templates',
  templateUrl: './instagram-templates.component.html',
  styleUrls: ['./instagram-templates.component.scss']
})
export class InstagramTemplatesComponent implements OnInit {

  templates1: {
    id:number;
    name: string;
    preview: string;
    duration: string;
    category: string;
    rating: number;
    assets: {
      id: number;
      layoutname: string;
      name: string;
      type: string;
      value: string;
      valueUrl: string;
    }[];
  }[] = [
    {id:3,name:"random",duration:"00:00:10",preview:"/assets/video/video3_m.mp4",category:"instagram", rating: 3.8, assets: [{id:0,layoutname:"ShopTV",name:"intro main",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"PROMO",name:"intro sub",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"Edit",name:"scene1 second",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"enhance",name:"scene1 first",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"and",name:"scene2 first",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:" transform",name:"scene2 second",type:"text", value:"", valueUrl:""},
      ]},
    {id:4,name:"whatever",duration:"00:00:08",preview:"/assets/video/video4_m.mp4",category:"instagram", rating: 3.2, assets: [{id:0,layoutname:"ShopTV",name:"intro main",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"PROMO",name:"intro sub",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"Edit",name:"scene1 second",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"enhance",name:"scene1 first",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"and",name:"scene2 first",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:" transform",name:"scene2 second",type:"text", value:"", valueUrl:""},
      ]},
    {id:5,name:"food",duration:"00:00:14",preview:"/assets/video/video5_m.mp4",category:"instagram", rating: 3.0, assets: [{id:0,layoutname:"ShopTV",name:"intro main",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"PROMO",name:"intro sub",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"Edit",name:"scene1 second",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"enhance",name:"scene1 first",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"and",name:"scene2 first",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:" transform",name:"scene2 second",type:"text", value:"", valueUrl:""},
      ]},
    {id:8,name:"",duration:"00:00:14",preview:"/assets/video/video9_m.mp4",category:"instagram", rating: 5, assets: [{id:0,layoutname:"ShopTV",name:"intro main",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"PROMO",name:"intro sub",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"Edit",name:"scene1 second",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"enhance",name:"scene1 first",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"and",name:"scene2 first",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:" transform",name:"scene2 second",type:"text", value:"", valueUrl:""},
      ]}
  ];

  templates: any[] = [] 
  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.templates = this.templates1;
      
    }, 1205);
  }

  selectTemplate(id) {
    this.router.navigate(['./dashboard/template/'+id]);
  }

}
