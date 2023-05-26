import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  }[] = [
    {id:0, name:"test", duration:"00:00:10", preview:"/assets/video/video1_m.mp4", category:"category"},
    {id:1,name:"name",duration:"00:00:10",preview:"/assets/video/video2_m.mp4",category:"category"},
    {id:2,name:"random",duration:"00:00:10",preview:"/assets/video/video3_m.mp4",category:"category"},
    {id:3,name:"whatever",duration:"00:00:10",preview:"/assets/video/video4_m.mp4",category:"category"},
    {id:4,name:"",duration:"00:00:10",preview:"/assets/video/video5_m.mp4",category:"category"},
    {id:5,name:"",duration:"00:00:10",preview:"/assets/video/video6_m.mp4",category:"category"},
    {id:6,name:"",duration:"00:00:10",preview:"/assets/video/video7_m.mp4",category:"category"},
    {id:7,name:"",duration:"00:00:10",preview:"/assets/video/video8_m.mp4",category:"category"},
    {id:8,name:"",duration:"00:00:10",preview:"/assets/video/video9_m.mp4",category:"category"}
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  selectTemplate(id) {
    this.router.navigate(['./dashboard/template/'+id]);
  }

}
