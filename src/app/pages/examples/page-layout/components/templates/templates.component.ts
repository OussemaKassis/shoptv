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
  }[] = [
    {id:0, name:"MS", duration:"00:00:11", preview:"/assets/video/MS.mp4", category:"facebook", rating: 5},
    {id:1, name:"test", duration:"00:00:10", preview:"/assets/video/video1_m.mp4", category:"category", rating: 4.5},
    {id:2,name:"name",duration:"00:00:10",preview:"/assets/video/video2_m.mp4",category:"category", rating: 3.5},
    {id:3,name:"random",duration:"00:00:10",preview:"/assets/video/video3_m.mp4",category:"category", rating: 3.8},
    {id:4,name:"whatever",duration:"00:00:10",preview:"/assets/video/video4_m.mp4",category:"category", rating: 3.2},
    {id:5,name:"",duration:"00:00:10",preview:"/assets/video/video5_m.mp4",category:"category", rating: 3.0},
    {id:6,name:"",duration:"00:00:10",preview:"/assets/video/video6_m.mp4",category:"category", rating: 4.8},
    {id:9,name:"",duration:"00:00:10",preview:"/assets/video/video7_m.mp4",category:"category", rating: 2.8},
    {id:7,name:"",duration:"00:00:10",preview:"/assets/video/video8_m.mp4",category:"category", rating: 4.5},
    {id:8,name:"",duration:"00:00:10",preview:"/assets/video/video9_m.mp4",category:"category", rating: 5}
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
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
