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
  }[] = [
    {id:0,name:"",preview:"/assets/video/video1_m.mp4", duration:""},
    {id:1,name:"",preview:"/assets/video/video2_m.mp4", duration:""},
    {id:2,name:"",preview:"/assets/video/video3_m.mp4", duration:""},
    {id:3,name:"",preview:"/assets/video/video4_m.mp4", duration:""},
    {id:4,name:"",preview:"/assets/video/video5_m.mp4", duration:""},
    {id:5,name:"",preview:"/assets/video/video6_m.mp4", duration:""},
    {id:6,name:"",preview:"/assets/video/video7_m.mp4", duration:""},
    {id:7,name:"",preview:"/assets/video/video8_m.mp4", duration:""},
    {id:8,name:"",preview:"/assets/video/video9_m.mp4", duration:""}
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  selectTemplate(id) {
    this.router.navigate(['./dashboard/template/'+id]);
  }

}
