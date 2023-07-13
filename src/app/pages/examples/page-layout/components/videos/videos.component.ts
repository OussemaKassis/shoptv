import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  videos: {
    id:number;
    name: string;
    preview: string;
    duration: string;
    category: string;
  }[] = [
    {id:0, name:"tiktok test1", duration:"00:00:10", preview:"/assets/video/video1_m.mp4", category:"tiktok"},
    {id:1,name:"tiktok test2",duration:"00:00:10",preview:"/assets/video/video2_m.mp4",category:"tiktok"},
    {id:2,name:"tiktok test3",duration:"00:00:10",preview:"/assets/video/video3_m.mp4",category:"tiktok"},
    {id:3,name:"instag vid",duration:"00:00:10",preview:"/assets/video/video4_m.mp4",category:"instagram"},
    {id:4,name:"instag vid",duration:"00:00:10",preview:"/assets/video/video5_m.mp4",category:"instagram"},
    {id:5,name:"test instag",duration:"00:00:10",preview:"/assets/video/video6_m.mp4",category:"instagram"},
    {id:6,name:"youtube ads",duration:"00:00:10",preview:"/assets/video/video7_m.mp4",category:"youtube"},
    {id:7,name:"YouTube",duration:"00:00:10",preview:"/assets/video/video8_m.mp4",category:"youtube"},
    {id:8,name:"yt testing",duration:"00:00:10",preview:"/assets/video/video9_m.mp4",category:"youtube"}
  ];


  tiktokvideos: {
    id:number;
    name: string;
    preview: string;
    duration: string;
    category: string;
  }[] = [];

  
  facebookvideos: {
    id:number;
    name: string;
    preview: string;
    duration: string;
    category: string;
  }[] = [];

  instagramvideos: {
    id:number;
    name: string;
    preview: string;
    duration: string;
    category: string;
  }[] = [];

  constructor() { }

  ngOnInit(): void {
    $('.item2').addClass('active');
    $('.item1').removeClass('active');

    this.videos.forEach((element: any, index: number) => {
      if(element.category === "tiktok") {
        this.tiktokvideos.push(element);
      }
      if(element.category === "youtube") {
        this.facebookvideos.push(element);
      }
      if(element.category === "instagram") {
        this.instagramvideos.push(element);
      }
    });
  }

  tiktokChange(event:any) {
    $('.tiktokcard').addClass('hidden');
    $('.loadingtiktok').removeClass('hidden');
    this.tiktokvideos = this.videos.filter((obj) => obj.category == "tiktok");
    this.tiktokvideos = this.tiktokvideos.filter((obj) => obj.name.includes(event.target.value));
    setTimeout(() => {
      $('.tiktokcard').removeClass('hidden');
      $('.loadingtiktok').addClass('hidden');
    }, 1500);
  }

  instaChange(event:any) {
    $('.instacard').addClass('hidden');
    $('.loadinginsta').removeClass('hidden');
    this.instagramvideos = this.videos.filter((obj) => obj.category == "instagram");
    this.instagramvideos = this.instagramvideos.filter((obj) => obj.name.includes(event.target.value));
    setTimeout(() => {
      $('.instacard').removeClass('hidden');
      $('.loadinginsta').addClass('hidden');
    }, 1500);
  }

  faceChange(event:any) {
    $('.facecard').addClass('hidden');
    $('.loadingface').removeClass('hidden');
    this.facebookvideos = this.videos.filter((obj) => obj.category == "youtube");
    this.facebookvideos = this.facebookvideos.filter((obj) => obj.name.includes(event.target.value));
    setTimeout(() => {
      $('.facecard').removeClass('hidden');
      $('.loadingface').addClass('hidden');
    }, 1500);
  }
}
