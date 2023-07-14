import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-youtube-templates',
  templateUrl: './youtube-templates.component.html',
  styleUrls: ['./youtube-templates.component.scss']
})
export class YoutubeTemplatesComponent implements OnInit {

  counter: number = 2;

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
    {id:0, name:"ShopTv", duration:"00:00:11", preview:"/assets/video/MS.mp4", category:"youtube", rating: 5, assets: [
      {id:0,layoutname:"ShopTV",name:"intro main",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"PROMO",name:"intro sub",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"pexels-michael-burrows-7129038.jpg",name:"intro main picture",type:"image", value:"", valueUrl:""},
      {id:1,layoutname:"enhance",name:"scene1 first",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"Edit",name:"scene1 second",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"pexels-andrea-piacquadio-920382.jpg",name:"pre scene1 first",type:"image", value:"", valueUrl:""},
      {id:1,layoutname:"pexels-george-milton-7014583.jpg",name:"pre scene1 second",type:"image", value:"", valueUrl:""},
      {id:1,layoutname:"pexels-george-milton-6953841.jpg",name:"pre scene1 third",type:"image", value:"", valueUrl:""},
      {id:1,layoutname:"and",name:"scene2 first",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:" transform",name:"scene2 second",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"pexels-anna-shvets-5325015.jpg",name:"scene2 image",type:"image", value:"", valueUrl:""},
      {id:1,layoutname:"videos",name:"scene3 first",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"your",name:"scene3 second",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"pexels-george-milton-7015027.jpg",name:"scene3 first image",type:"image", value:"", valueUrl:""},
      {id:1,layoutname:"pexels-artem-podrez-4492216.jpg",name:"scene3 second image",type:"image", value:"", valueUrl:""},
      {id:1,layoutname:"like",name:"scene4 first",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"never before!",name:"scene4 second",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"pexels-anna-shvets-5325054.jpg",name:"scene4 first image",type:"image", value:"", valueUrl:""},
      {id:1,layoutname:"logo-social.png",name:"final logo",type:"image", value:"", valueUrl:""}
    ]},
    {id:4,name:"whatever",duration:"00:00:08",preview:"/assets/video/video4_m.mp4",category:"youtube", rating: 3.2, assets: [{id:0,layoutname:"ShopTV",name:"intro main",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"PROMO",name:"intro sub",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"Edit",name:"scene1 second",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"enhance",name:"scene1 first",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"and",name:"scene2 first",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:" transform",name:"scene2 second",type:"text", value:"", valueUrl:""},
      ]},
    {id:5,name:"food",duration:"00:00:14",preview:"/assets/video/video5_m.mp4",category:"youtube", rating: 3.0, assets: [{id:0,layoutname:"ShopTV",name:"intro main",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"PROMO",name:"intro sub",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"Edit",name:"scene1 second",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"enhance",name:"scene1 first",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"and",name:"scene2 first",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:" transform",name:"scene2 second",type:"text", value:"", valueUrl:""},
      ]}
  ];

  templates: any[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('templateAdded') == 'true') {
      this.counter = 3
    }

    setTimeout(() => {
      this.templates1.forEach((elem:any) => {
        console.log(elem.id !== 0)
        if(localStorage.getItem('templateAdded') == 'true') {
          this.templates.push (elem);
        } else if(elem.id !== 0) {
          this.templates.push (elem);
        }
      })
    }, 5200);
  }

  selectTemplate(id) {
    this.router.navigate(['./dashboard/template/'+id]);
  }

}
