import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import $ from 'jquery';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit {

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
    {id:0, name:"MS", duration:"00:00:11", preview:"/assets/video/MS.mp4", category:"facebook", rating: 5, assets: [
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
    {id:1, name:"test", duration:"00:00:14", preview:"/assets/video/video1_m.mp4", category:"category", rating: 4.5, assets: [{id:0,layoutname:"ShopTV",name:"intro main",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"PROMO",name:"intro sub",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"Edit",name:"scene1 second",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"enhance",name:"scene1 first",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"and",name:"scene2 first",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:" transform",name:"scene2 second",type:"text", value:"", valueUrl:""},
      ]},
    {id:2,name:"name",duration:"00:00:15",preview:"/assets/video/video2_m.mp4",category:"category", rating: 3.5, assets: [{id:0,layoutname:"ShopTV",name:"intro main",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"PROMO",name:"intro sub",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"Edit",name:"scene1 second",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"enhance",name:"scene1 first",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"and",name:"scene2 first",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:" transform",name:"scene2 second",type:"text", value:"", valueUrl:""},
      ]},
    {id:3,name:"random",duration:"00:00:10",preview:"/assets/video/video3_m.mp4",category:"category", rating: 3.8, assets: [{id:0,layoutname:"ShopTV",name:"intro main",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"PROMO",name:"intro sub",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"Edit",name:"scene1 second",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"enhance",name:"scene1 first",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"and",name:"scene2 first",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:" transform",name:"scene2 second",type:"text", value:"", valueUrl:""},
      ]},
    {id:4,name:"whatever",duration:"00:00:08",preview:"/assets/video/video4_m.mp4",category:"category", rating: 3.2, assets: [{id:0,layoutname:"ShopTV",name:"intro main",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"PROMO",name:"intro sub",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"Edit",name:"scene1 second",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"enhance",name:"scene1 first",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"and",name:"scene2 first",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:" transform",name:"scene2 second",type:"text", value:"", valueUrl:""},
      ]},
    {id:5,name:"food",duration:"00:00:14",preview:"/assets/video/video5_m.mp4",category:"category", rating: 3.0, assets: [{id:0,layoutname:"ShopTV",name:"intro main",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"PROMO",name:"intro sub",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"Edit",name:"scene1 second",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"enhance",name:"scene1 first",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"and",name:"scene2 first",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:" transform",name:"scene2 second",type:"text", value:"", valueUrl:""},
      ]},
    {id:6,name:"jewelry",duration:"00:00:12",preview:"/assets/video/video6_m.mp4",category:"category", rating: 4.8, assets: [{id:0,layoutname:"ShopTV",name:"intro main",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"PROMO",name:"intro sub",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"Edit",name:"scene1 second",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"enhance",name:"scene1 first",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"and",name:"scene2 first",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:" transform",name:"scene2 second",type:"text", value:"", valueUrl:""},
      ]},
    {id:9,name:"",duration:"00:00:13",preview:"/assets/video/video7_m.mp4",category:"category", rating: 2.8, assets: [{id:0,layoutname:"ShopTV",name:"intro main",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"PROMO",name:"intro sub",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"Edit",name:"scene1 second",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"enhance",name:"scene1 first",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"and",name:"scene2 first",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:" transform",name:"scene2 second",type:"text", value:"", valueUrl:""},
      ]},
    {id:7,name:"",duration:"00:00:12",preview:"/assets/video/video8_m.mp4",category:"category", rating: 4.5, assets: [{id:0,layoutname:"ShopTV",name:"intro main",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"PROMO",name:"intro sub",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"Edit",name:"scene1 second",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"enhance",name:"scene1 first",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"and",name:"scene2 first",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:" transform",name:"scene2 second",type:"text", value:"", valueUrl:""},
      ]},
    {id:8,name:"",duration:"00:00:14",preview:"/assets/video/video9_m.mp4",category:"category", rating: 5, assets: [{id:0,layoutname:"ShopTV",name:"intro main",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"PROMO",name:"intro sub",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"Edit",name:"scene1 second",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"enhance",name:"scene1 first",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:"and",name:"scene2 first",type:"text", value:"", valueUrl:""},
      {id:1,layoutname:" transform",name:"scene2 second",type:"text", value:"", valueUrl:""},
      ]}
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    $('.item1').addClass('active');
    $('.item2').removeClass('active');

    setTimeout(() => {
      let fas = $('.rating-with-color');
      fas.each( function(){
        if($(this).hasClass('fa-star') && $(this).hasClass('fa-star-half')) {
          $(this).removeClass('fa-star-half');
        }

        if($(this).hasClass('fa-star-half') && !$(this).hasClass('fa-star') && !$(this).hasClass('fas')) {
          $(this).addClass('fas');
        }

        if($(this).hasClass('far') && $(this).hasClass('fa-star-half')) {
          $(this).addClass('fa-star');
          $(this).removeClass('fa-star-half');
          $(this).removeClass('fas');
          $(this).addClass('fa-star');
        }
    });
    }, 20);
  }

  selectTemplate(id) {
    this.router.navigate(['./dashboard/template/'+id]);
  }

}
