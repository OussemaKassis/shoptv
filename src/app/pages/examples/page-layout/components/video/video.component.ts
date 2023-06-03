import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  videos: {
    id:number;
    name: string;
    preview: string;
    duration: string;
    category: string;
  }[] = [
    {id:0,name:"tiktok test1", duration:"00:00:10", preview:"/assets/video/video1_m.mp4", category:"tiktok"},
    {id:1,name:"tiktok test2",duration:"00:00:10",preview:"/assets/video/video2_m.mp4",category:"tiktok"},
    {id:2,name:"tiktok test3",duration:"00:00:10",preview:"/assets/video/video3_m.mp4",category:"tiktok"},
    {id:3,name:"facebook vid",duration:"00:00:10",preview:"/assets/video/video4_m.mp4",category:"facebook"},
    {id:4,name:"fb vid",duration:"00:00:10",preview:"/assets/video/video5_m.mp4",category:"facebook"},
    {id:5,name:"test fb",duration:"00:00:10",preview:"/assets/video/video6_m.mp4",category:"facebook"},
    {id:6,name:"youtube ads",duration:"00:00:10",preview:"/assets/video/video7_m.mp4",category:"youtube"},
    {id:7,name:"YouTube",duration:"00:00:10",preview:"/assets/video/video8_m.mp4",category:"youtube"},
    {id:8,name:"yt testing",duration:"00:00:10",preview:"/assets/video/video9_m.mp4",category:"youtube"}
  ];

  video: {
    id:number;
    name: string;
    preview: string;
    duration: string;
    category: string;
  }[] = [];
  videoId: string = "";
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.videoId = params['id']
    });

    this.videos.forEach((element: any, index: number) => {
      console.log(this.videoId);
      if(element.id == this.videoId) {
        this.video.push(element);
      }
    });

    console.log(this.video)
  }

}
