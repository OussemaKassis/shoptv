import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  available:boolean = false;

  templates2: {
    id:number;
    name: string;
    preview: string;
    duration: string;
    category: string;
    rating: number;
    assets: {
      id: number;
      name: string;
      type: string;
      value: string;
    }[]
  }[]


  templates1: {
    id:number;
    name: string;
    preview: string;
    duration: string;
    category: string;
    rating: number;
    assets: {
      id: number;
      name: string;
      type: string;
      value: string;
    }[];
  }[] = [
    {id:0, name:"MS", duration:"00:00:11", preview:"/assets/video/MS.mp4", category:"facebook", rating: 5, assets: [
      {id:0,name:"ShopTV",type:"text", value:""},
      {id:1,name:"PROMO",type:"text", value:""},
      {id:1,name:"Edit",type:"text", value:""},
      {id:1,name:"enhance",type:"text", value:""},
      {id:1,name:"and",type:"text", value:""},
      {id:1,name:" transform",type:"text", value:""},
      {id:1,name:"your",type:"text", value:""},
      {id:1,name:"videos",type:"text", value:""},
      {id:1,name:"like",type:"text", value:""},
      {id:1,name:"never before!",type:"text", value:""},
      {id:1,name:"pexels-michael-burrows-7129038.jpg",type:"image", value:""},
      {id:1,name:"logo-social.png",type:"image", value:""},
      {id:1,name:"pexels-andrea-piacquadio-920382.jpg",type:"image", value:""},
      {id:1,name:"pexels-george-milton-7014583.jpg",type:"image", value:""},
      {id:1,name:"pexels-anna-shvets-5325015.jpg",type:"image", value:""},
      {id:1,name:"pexels-artem-podrez-4492216.jpg",type:"image", value:""}]},
    {id:1, name:"test", duration:"00:00:14", preview:"/assets/video/video1_m.mp4", category:"category", rating: 4.5, assets: [{id:0,name:"ShopTV",type:"text", value:""},
    {id:1,name:"PROMO",type:"text", value:""},
    {id:1,name:"Edit",type:"text", value:""},
    {id:1,name:"enhance",type:"text", value:""},
    {id:1,name:"and",type:"text", value:""},
    {id:1,name:" transform",type:"text", value:""},
    {id:1,name:"your",type:"text", value:""},
    {id:1,name:"videos",type:"text", value:""},
    {id:1,name:"like",type:"text", value:""},
    {id:1,name:"never before!",type:"text", value:""},
    {id:1,name:"pexels-michael-burrows-7129038.jpg",type:"image", value:""},
    {id:1,name:"logo-social.png",type:"image", value:""},
    {id:1,name:"pexels-andrea-piacquadio-920382.jpg",type:"image", value:""},
    {id:1,name:"pexels-george-milton-7014583.jpg",type:"image", value:""},
    {id:1,name:"pexels-anna-shvets-5325015.jpg",type:"image", value:""},
    {id:1,name:"pexels-artem-podrez-4492216.jpg",type:"image", value:""}]},
    {id:2,name:"name",duration:"00:00:15",preview:"/assets/video/video2_m.mp4",category:"category", rating: 3.5, assets: [{id:0,name:"ShopTV",type:"text", value:""},
    {id:1,name:"PROMO",type:"text", value:""},
    {id:1,name:"Edit",type:"text", value:""},
    {id:1,name:"enhance",type:"text", value:""},
    {id:1,name:"and",type:"text", value:""},
    {id:1,name:" transform",type:"text", value:""},
    {id:1,name:"your",type:"text", value:""},
    {id:1,name:"videos",type:"text", value:""},
    {id:1,name:"like",type:"text", value:""},
    {id:1,name:"never before!",type:"text", value:""},
    {id:1,name:"pexels-michael-burrows-7129038.jpg",type:"image", value:""},
    {id:1,name:"logo-social.png",type:"image", value:""},
    {id:1,name:"pexels-andrea-piacquadio-920382.jpg",type:"image", value:""},
    {id:1,name:"pexels-george-milton-7014583.jpg",type:"image", value:""},
    {id:1,name:"pexels-anna-shvets-5325015.jpg",type:"image", value:""},
    {id:1,name:"pexels-artem-podrez-4492216.jpg",type:"image", value:""}]},
    {id:3,name:"random",duration:"00:00:10",preview:"/assets/video/video3_m.mp4",category:"category", rating: 3.8, assets: [{id:0,name:"ShopTV",type:"text", value:""},
    {id:1,name:"PROMO",type:"text", value:""},
    {id:1,name:"Edit",type:"text", value:""},
    {id:1,name:"enhance",type:"text", value:""},
    {id:1,name:"and",type:"text", value:""},
    {id:1,name:" transform",type:"text", value:""},
    {id:1,name:"your",type:"text", value:""},
    {id:1,name:"videos",type:"text", value:""},
    {id:1,name:"like",type:"text", value:""},
    {id:1,name:"never before!",type:"text", value:""},
    {id:1,name:"pexels-michael-burrows-7129038.jpg",type:"image", value:""},
    {id:1,name:"logo-social.png",type:"image", value:""},
    {id:1,name:"pexels-andrea-piacquadio-920382.jpg",type:"image", value:""},
    {id:1,name:"pexels-george-milton-7014583.jpg",type:"image", value:""},
    {id:1,name:"pexels-anna-shvets-5325015.jpg",type:"image", value:""},
    {id:1,name:"pexels-artem-podrez-4492216.jpg",type:"image", value:""}]},
    {id:4,name:"whatever",duration:"00:00:08",preview:"/assets/video/video4_m.mp4",category:"category", rating: 3.2, assets: [{id:0,name:"ShopTV",type:"text", value:""},
    {id:1,name:"PROMO",type:"text", value:""},
    {id:1,name:"Edit",type:"text", value:""},
    {id:1,name:"enhance",type:"text", value:""},
    {id:1,name:"and",type:"text", value:""},
    {id:1,name:" transform",type:"text", value:""},
    {id:1,name:"your",type:"text", value:""},
    {id:1,name:"videos",type:"text", value:""},
    {id:1,name:"like",type:"text", value:""},
    {id:1,name:"never before!",type:"text", value:""},
    {id:1,name:"pexels-michael-burrows-7129038.jpg",type:"image", value:""},
    {id:1,name:"logo-social.png",type:"image", value:""},
    {id:1,name:"pexels-andrea-piacquadio-920382.jpg",type:"image", value:""},
    {id:1,name:"pexels-george-milton-7014583.jpg",type:"image", value:""},
    {id:1,name:"pexels-anna-shvets-5325015.jpg",type:"image", value:""},
    {id:1,name:"pexels-artem-podrez-4492216.jpg",type:"image", value:""}]},
    {id:5,name:"food",duration:"00:00:14",preview:"/assets/video/video5_m.mp4",category:"category", rating: 3.0, assets: [{id:0,name:"ShopTV",type:"text", value:""},
    {id:1,name:"PROMO",type:"text", value:""},
    {id:1,name:"Edit",type:"text", value:""},
    {id:1,name:"enhance",type:"text", value:""},
    {id:1,name:"and",type:"text", value:""},
    {id:1,name:" transform",type:"text", value:""},
    {id:1,name:"your",type:"text", value:""},
    {id:1,name:"videos",type:"text", value:""},
    {id:1,name:"like",type:"text", value:""},
    {id:1,name:"never before!",type:"text", value:""},
    {id:1,name:"pexels-michael-burrows-7129038.jpg",type:"image", value:""},
    {id:1,name:"logo-social.png",type:"image", value:""},
    {id:1,name:"pexels-andrea-piacquadio-920382.jpg",type:"image", value:""},
    {id:1,name:"pexels-george-milton-7014583.jpg",type:"image", value:""},
    {id:1,name:"pexels-anna-shvets-5325015.jpg",type:"image", value:""},
    {id:1,name:"pexels-artem-podrez-4492216.jpg",type:"image", value:""}]},
    {id:6,name:"jewelry",duration:"00:00:12",preview:"/assets/video/video6_m.mp4",category:"category", rating: 4.8, assets: [{id:0,name:"ShopTV",type:"text", value:""},
    {id:1,name:"PROMO",type:"text", value:""},
    {id:1,name:"Edit",type:"text", value:""},
    {id:1,name:"enhance",type:"text", value:""},
    {id:1,name:"and",type:"text", value:""},
    {id:1,name:" transform",type:"text", value:""},
    {id:1,name:"your",type:"text", value:""},
    {id:1,name:"videos",type:"text", value:""},
    {id:1,name:"like",type:"text", value:""},
    {id:1,name:"never before!",type:"text", value:""},
    {id:1,name:"pexels-michael-burrows-7129038.jpg",type:"image", value:""},
    {id:1,name:"logo-social.png",type:"image", value:""},
    {id:1,name:"pexels-andrea-piacquadio-920382.jpg",type:"image", value:""},
    {id:1,name:"pexels-george-milton-7014583.jpg",type:"image", value:""},
    {id:1,name:"pexels-anna-shvets-5325015.jpg",type:"image", value:""},
    {id:1,name:"pexels-artem-podrez-4492216.jpg",type:"image", value:""}]},
    {id:9,name:"",duration:"00:00:13",preview:"/assets/video/video7_m.mp4",category:"category", rating: 2.8, assets: [{id:0,name:"ShopTV",type:"text", value:""},
    {id:1,name:"PROMO",type:"text", value:""},
    {id:1,name:"Edit",type:"text", value:""},
    {id:1,name:"enhance",type:"text", value:""},
    {id:1,name:"and",type:"text", value:""},
    {id:1,name:" transform",type:"text", value:""},
    {id:1,name:"your",type:"text", value:""},
    {id:1,name:"videos",type:"text", value:""},
    {id:1,name:"like",type:"text", value:""},
    {id:1,name:"never before!",type:"text", value:""},
    {id:1,name:"pexels-michael-burrows-7129038.jpg",type:"image", value:""},
    {id:1,name:"logo-social.png",type:"image", value:""},
    {id:1,name:"pexels-andrea-piacquadio-920382.jpg",type:"image", value:""},
    {id:1,name:"pexels-george-milton-7014583.jpg",type:"image", value:""},
    {id:1,name:"pexels-anna-shvets-5325015.jpg",type:"image", value:""},
    {id:1,name:"pexels-artem-podrez-4492216.jpg",type:"image", value:""}]},
    {id:7,name:"",duration:"00:00:12",preview:"/assets/video/video8_m.mp4",category:"category", rating: 4.5, assets: [{id:0,name:"ShopTV",type:"text", value:""},
    {id:1,name:"PROMO",type:"text", value:""},
    {id:1,name:"Edit",type:"text", value:""},
    {id:1,name:"enhance",type:"text", value:""},
    {id:1,name:"and",type:"text", value:""},
    {id:1,name:" transform",type:"text", value:""},
    {id:1,name:"your",type:"text", value:""},
    {id:1,name:"videos",type:"text", value:""},
    {id:1,name:"like",type:"text", value:""},
    {id:1,name:"never before!",type:"text", value:""},
    {id:1,name:"pexels-michael-burrows-7129038.jpg",type:"image", value:""},
    {id:1,name:"logo-social.png",type:"image", value:""},
    {id:1,name:"pexels-andrea-piacquadio-920382.jpg",type:"image", value:""},
    {id:1,name:"pexels-george-milton-7014583.jpg",type:"image", value:""},
    {id:1,name:"pexels-anna-shvets-5325015.jpg",type:"image", value:""},
    {id:1,name:"pexels-artem-podrez-4492216.jpg",type:"image", value:""}]},
    {id:8,name:"",duration:"00:00:14",preview:"/assets/video/video9_m.mp4",category:"category", rating: 5, assets: [{id:0,name:"ShopTV",type:"text", value:""},
    {id:1,name:"PROMO",type:"text", value:""},
    {id:1,name:"Edit",type:"text", value:""},
    {id:1,name:"enhance",type:"text", value:""},
    {id:1,name:"and",type:"text", value:""},
    {id:1,name:" transform",type:"text", value:""},
    {id:1,name:"your",type:"text", value:""},
    {id:1,name:"videos",type:"text", value:""},
    {id:1,name:"like",type:"text", value:""},
    {id:1,name:"never before!",type:"text", value:""},
    {id:1,name:"pexels-michael-burrows-7129038.jpg",type:"image", value:""},
    {id:1,name:"logo-social.png",type:"image", value:""},
    {id:1,name:"pexels-andrea-piacquadio-920382.jpg",type:"image", value:""},
    {id:1,name:"pexels-george-milton-7014583.jpg",type:"image", value:""},
    {id:1,name:"pexels-anna-shvets-5325015.jpg",type:"image", value:""},
    {id:1,name:"pexels-artem-podrez-4492216.jpg",type:"image", value:""}]}
  ];


  constructor() { }

  ngOnInit(): void {
    $('.item1').removeClass('active');
    $('.item2').removeClass('active');
    this.templates2 = [];

    if(localStorage.getItem('TemplateAdded')=='true') {
      this.templates2 = this.templates1;
    }else {
      this.templates1.forEach((element: any, index: number )=> {
        if (element.id !== 0){
          this.templates2.push(element);
        }
      })
    }

    console.log(this.templates2);


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

}
