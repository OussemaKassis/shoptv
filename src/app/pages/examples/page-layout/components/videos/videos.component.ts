import { Component, OnInit } from '@angular/core';

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
    {id:3,name:"facebook vid",duration:"00:00:10",preview:"/assets/video/video4_m.mp4",category:"facebook"},
    {id:4,name:"fb vid",duration:"00:00:10",preview:"/assets/video/video5_m.mp4",category:"facebook"},
    {id:5,name:"test fb",duration:"00:00:10",preview:"/assets/video/video6_m.mp4",category:"facebook"},
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

  youtubevideos: {
    id:number;
    name: string;
    preview: string;
    duration: string;
    category: string;
  }[] = [];

  constructor() { }

  ngOnInit(): void {
    this.videos.forEach((element: any, index: number) => {
      if(element.category === "tiktok") {
        this.tiktokvideos.push(element);
      }
      if(element.category === "facebook") {
        this.facebookvideos.push(element);
      }
      if(element.category === "youtube") {
        this.youtubevideos.push(element);
      }
    });

    console.log(this.tiktokvideos)
  }

}
