import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { element } from 'protractor';
import { TemplateService } from './service/template.service';
import $ from 'jquery';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
  videoName: string = "";

  list: {
    id:number;
    name: string;
    type: string;
    value: string;
  }[] = [];

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
      valueUrl: string;
    }[];
  }[] = [
    {id:0, name:"MS", duration:"00:00:11", preview:"/assets/video/MS.mp4", category:"facebook", rating: 5, assets: [{id:0,name:"ShopTV",type:"text", value:"", valueUrl:""},
    {id:1,name:"PROMO",type:"text", value:"", valueUrl:""},
    {id:1,name:"Edit",type:"text", value:"", valueUrl:""},
    {id:1,name:"enhance",type:"text", value:"", valueUrl:""},
    {id:1,name:"and",type:"text", value:"", valueUrl:""},
    {id:1,name:" transform",type:"text", value:"", valueUrl:""},
    {id:1,name:"your",type:"text", value:"", valueUrl:""},
    {id:1,name:"videos",type:"text", value:"", valueUrl:""},
    {id:1,name:"like",type:"text", value:"", valueUrl:""},
    {id:1,name:"never before!",type:"text", value:"", valueUrl:""},
    {id:1,name:"pexels-michael-burrows-7129038.jpg",type:"image", value:"", valueUrl:""},
    {id:1,name:"logo-social.png",type:"image", value:"", valueUrl:""},
    {id:1,name:"pexels-andrea-piacquadio-920382.jpg",type:"image", value:"", valueUrl:""},
    {id:1,name:"pexels-george-milton-7014583.jpg",type:"image", value:"", valueUrl:""},
    {id:1,name:"pexels-anna-shvets-5325015.jpg",type:"image", value:"", valueUrl:""},
    {id:1,name:"pexels-artem-podrez-4492216.jpg",type:"image", value:"", valueUrl:""}]},
    {id:1, name:"test", duration:"00:00:14", preview:"/assets/video/video1_m.mp4", category:"category", rating: 4.5, assets: [{id:0,name:"ShopTV",type:"text", value:"", valueUrl:""},
    {id:1,name:"PROMO",type:"text", value:"", valueUrl:""},
    {id:1,name:"Edit",type:"text", value:"", valueUrl:""},
    {id:1,name:"enhance",type:"text", value:"", valueUrl:""},
    {id:1,name:"and",type:"text", value:"", valueUrl:""},
    {id:1,name:" transform",type:"text", value:"", valueUrl:""},
    {id:1,name:"your",type:"text", value:"", valueUrl:""},
    {id:1,name:"videos",type:"text", value:"", valueUrl:""},
    {id:1,name:"like",type:"text", value:"", valueUrl:""},
    {id:1,name:"never before!",type:"text", value:"", valueUrl:""},
    {id:1,name:"pexels-michael-burrows-7129038.jpg",type:"image", value:"", valueUrl:""},
    {id:1,name:"logo-social.png",type:"image", value:"", valueUrl:""},
    {id:1,name:"pexels-andrea-piacquadio-920382.jpg",type:"image", value:"", valueUrl:""},
    {id:1,name:"pexels-george-milton-7014583.jpg",type:"image", value:"", valueUrl:""},
    {id:1,name:"pexels-anna-shvets-5325015.jpg",type:"image", value:"", valueUrl:""},
    {id:1,name:"pexels-artem-podrez-4492216.jpg",type:"image", value:"", valueUrl:""}]},
    {id:2,name:"name",duration:"00:00:15",preview:"/assets/video/video2_m.mp4",category:"category", rating: 3.5, assets: [{id:0,name:"ShopTV",type:"text", value:"", valueUrl:""},
    {id:1,name:"PROMO",type:"text", value:"", valueUrl:""},
    {id:1,name:"Edit",type:"text", value:"", valueUrl:""},
    {id:1,name:"enhance",type:"text", value:"", valueUrl:""},
    {id:1,name:"and",type:"text", value:"", valueUrl:""},
    {id:1,name:" transform",type:"text", value:"", valueUrl:""},
    {id:1,name:"your",type:"text", value:"", valueUrl:""},
    {id:1,name:"videos",type:"text", value:"", valueUrl:""},
    {id:1,name:"like",type:"text", value:"", valueUrl:""},
    {id:1,name:"never before!",type:"text", value:"", valueUrl:""},
    {id:1,name:"pexels-michael-burrows-7129038.jpg",type:"image", value:"", valueUrl:""},
    {id:1,name:"logo-social.png",type:"image", value:"", valueUrl:""},
    {id:1,name:"pexels-andrea-piacquadio-920382.jpg",type:"image", value:"", valueUrl:""},
    {id:1,name:"pexels-george-milton-7014583.jpg",type:"image", value:"", valueUrl:""},
    {id:1,name:"pexels-anna-shvets-5325015.jpg",type:"image", value:"", valueUrl:""},
    {id:1,name:"pexels-artem-podrez-4492216.jpg",type:"image", value:"", valueUrl:""}]},
    {id:3,name:"random",duration:"00:00:10",preview:"/assets/video/video3_m.mp4",category:"category", rating: 3.8, assets: [{id:0,name:"ShopTV",type:"text", value:"", valueUrl:""},
    {id:1,name:"PROMO",type:"text", value:"", valueUrl:""},
    {id:1,name:"Edit",type:"text", value:"", valueUrl:""},
    {id:1,name:"enhance",type:"text", value:"", valueUrl:""},
    {id:1,name:"and",type:"text", value:"", valueUrl:""},
    {id:1,name:" transform",type:"text", value:"", valueUrl:""},
    {id:1,name:"your",type:"text", value:"", valueUrl:""},
    {id:1,name:"videos",type:"text", value:"", valueUrl:""},
    {id:1,name:"like",type:"text", value:"", valueUrl:""},
    {id:1,name:"never before!",type:"text", value:"", valueUrl:""},
    {id:1,name:"pexels-michael-burrows-7129038.jpg",type:"image", value:"", valueUrl:""},
    {id:1,name:"logo-social.png",type:"image", value:"", valueUrl:""},
    {id:1,name:"pexels-andrea-piacquadio-920382.jpg",type:"image", value:"", valueUrl:""},
    {id:1,name:"pexels-george-milton-7014583.jpg",type:"image", value:"", valueUrl:""},
    {id:1,name:"pexels-anna-shvets-5325015.jpg",type:"image", value:"", valueUrl:""},
    {id:1,name:"pexels-artem-podrez-4492216.jpg",type:"image", value:"", valueUrl:""}]},
    {id:4,name:"whatever",duration:"00:00:08",preview:"/assets/video/video4_m.mp4",category:"category", rating: 3.2, assets: [{id:0,name:"ShopTV",type:"text", value:"", valueUrl:""},
    {id:1,name:"PROMO",type:"text", value:"", valueUrl:""},
    {id:1,name:"Edit",type:"text", value:"", valueUrl:""},
    {id:1,name:"enhance",type:"text", value:"", valueUrl:""},
    {id:1,name:"and",type:"text", value:"", valueUrl:""},
    {id:1,name:" transform",type:"text", value:"", valueUrl:""},
    {id:1,name:"your",type:"text", value:"", valueUrl:""},
    {id:1,name:"videos",type:"text", value:"", valueUrl:""},
    {id:1,name:"like",type:"text", value:"", valueUrl:""},
    {id:1,name:"never before!",type:"text", value:"", valueUrl:""},
    {id:1,name:"pexels-michael-burrows-7129038.jpg",type:"image", value:"", valueUrl:""},
    {id:1,name:"logo-social.png",type:"image", value:"", valueUrl:""},
    {id:1,name:"pexels-andrea-piacquadio-920382.jpg",type:"image", value:"", valueUrl:""},
    {id:1,name:"pexels-george-milton-7014583.jpg",type:"image", value:"", valueUrl:""},
    {id:1,name:"pexels-anna-shvets-5325015.jpg",type:"image", value:"", valueUrl:""},
    {id:1,name:"pexels-artem-podrez-4492216.jpg",type:"image", value:"", valueUrl:""}]},
    {id:5,name:"food",duration:"00:00:14",preview:"/assets/video/video5_m.mp4",category:"category", rating: 3.0, assets: [{id:0,name:"ShopTV",type:"text", value:"", valueUrl:""},
    {id:1,name:"PROMO",type:"text", value:"", valueUrl:""},
    {id:1,name:"Edit",type:"text", value:"", valueUrl:""},
    {id:1,name:"enhance",type:"text", value:"", valueUrl:""},
    {id:1,name:"and",type:"text", value:"", valueUrl:""},
    {id:1,name:" transform",type:"text", value:"", valueUrl:""},
    {id:1,name:"your",type:"text", value:"", valueUrl:""},
    {id:1,name:"videos",type:"text", value:"", valueUrl:""},
    {id:1,name:"like",type:"text", value:"", valueUrl:""},
    {id:1,name:"never before!",type:"text", value:"", valueUrl:""},
    {id:1,name:"pexels-michael-burrows-7129038.jpg",type:"image", value:"", valueUrl:""},
    {id:1,name:"logo-social.png",type:"image", value:"", valueUrl:""},
    {id:1,name:"pexels-andrea-piacquadio-920382.jpg",type:"image", value:"", valueUrl:""},
    {id:1,name:"pexels-george-milton-7014583.jpg",type:"image", value:"", valueUrl:""},
    {id:1,name:"pexels-anna-shvets-5325015.jpg",type:"image", value:"", valueUrl:""},
    {id:1,name:"pexels-artem-podrez-4492216.jpg",type:"image", value:"", valueUrl:""}]},
    {id:6,name:"jewelry",duration:"00:00:12",preview:"/assets/video/video6_m.mp4",category:"category", rating: 4.8, assets: [{id:0,name:"ShopTV",type:"text", value:"", valueUrl:""},
    {id:1,name:"PROMO",type:"text", value:"", valueUrl:""},
    {id:1,name:"Edit",type:"text", value:"", valueUrl:""},
    {id:1,name:"enhance",type:"text", value:"", valueUrl:""},
    {id:1,name:"and",type:"text", value:"", valueUrl:""},
    {id:1,name:" transform",type:"text", value:"", valueUrl:""},
    {id:1,name:"your",type:"text", value:"", valueUrl:""},
    {id:1,name:"videos",type:"text", value:"", valueUrl:""},
    {id:1,name:"like",type:"text", value:"", valueUrl:""},
    {id:1,name:"never before!",type:"text", value:"", valueUrl:""},
    {id:1,name:"pexels-michael-burrows-7129038.jpg",type:"image", value:"", valueUrl:""},
    {id:1,name:"logo-social.png",type:"image", value:"", valueUrl:""},
    {id:1,name:"pexels-andrea-piacquadio-920382.jpg",type:"image", value:"", valueUrl:""},
    {id:1,name:"pexels-george-milton-7014583.jpg",type:"image", value:"", valueUrl:""},
    {id:1,name:"pexels-anna-shvets-5325015.jpg",type:"image", value:"", valueUrl:""},
    {id:1,name:"pexels-artem-podrez-4492216.jpg",type:"image", value:"", valueUrl:""}]},
    {id:9,name:"",duration:"00:00:13",preview:"/assets/video/video7_m.mp4",category:"category", rating: 2.8, assets: [{id:0,name:"ShopTV",type:"text", value:"", valueUrl:""},
    {id:1,name:"PROMO",type:"text", value:"", valueUrl:""},
    {id:1,name:"Edit",type:"text", value:"", valueUrl:""},
    {id:1,name:"enhance",type:"text", value:"", valueUrl:""},
    {id:1,name:"and",type:"text", value:"", valueUrl:""},
    {id:1,name:" transform",type:"text", value:"", valueUrl:""},
    {id:1,name:"your",type:"text", value:"", valueUrl:""},
    {id:1,name:"videos",type:"text", value:"", valueUrl:""},
    {id:1,name:"like",type:"text", value:"", valueUrl:""},
    {id:1,name:"never before!",type:"text", value:"", valueUrl:""},
    {id:1,name:"pexels-michael-burrows-7129038.jpg",type:"image", value:"", valueUrl:""},
    {id:1,name:"logo-social.png",type:"image", value:"", valueUrl:""},
    {id:1,name:"pexels-andrea-piacquadio-920382.jpg",type:"image", value:"", valueUrl:""},
    {id:1,name:"pexels-george-milton-7014583.jpg",type:"image", value:"", valueUrl:""},
    {id:1,name:"pexels-anna-shvets-5325015.jpg",type:"image", value:"", valueUrl:""},
    {id:1,name:"pexels-artem-podrez-4492216.jpg",type:"image", value:"", valueUrl:""}]},
    {id:7,name:"",duration:"00:00:12",preview:"/assets/video/video8_m.mp4",category:"category", rating: 4.5, assets: [{id:0,name:"ShopTV",type:"text", value:"", valueUrl:""},
    {id:1,name:"PROMO",type:"text", value:"", valueUrl:""},
    {id:1,name:"Edit",type:"text", value:"", valueUrl:""},
    {id:1,name:"enhance",type:"text", value:"", valueUrl:""},
    {id:1,name:"and",type:"text", value:"", valueUrl:""},
    {id:1,name:" transform",type:"text", value:"", valueUrl:""},
    {id:1,name:"your",type:"text", value:"", valueUrl:""},
    {id:1,name:"videos",type:"text", value:"", valueUrl:""},
    {id:1,name:"like",type:"text", value:"", valueUrl:""},
    {id:1,name:"never before!",type:"text", value:"", valueUrl:""},
    {id:1,name:"pexels-michael-burrows-7129038.jpg",type:"image", value:"", valueUrl:""},
    {id:1,name:"logo-social.png",type:"image", value:"", valueUrl:""},
    {id:1,name:"pexels-andrea-piacquadio-920382.jpg",type:"image", value:"", valueUrl:""},
    {id:1,name:"pexels-george-milton-7014583.jpg",type:"image", value:"", valueUrl:""},
    {id:1,name:"pexels-anna-shvets-5325015.jpg",type:"image", value:"", valueUrl:""},
    {id:1,name:"pexels-artem-podrez-4492216.jpg",type:"image", value:"", valueUrl:""}]},
    {id:8,name:"",duration:"00:00:14",preview:"/assets/video/video9_m.mp4",category:"category", rating: 5, assets: [{id:0,name:"ShopTV",type:"text", value:"", valueUrl:""},
    {id:1,name:"PROMO",type:"text", value:"", valueUrl:""},
    {id:1,name:"Edit",type:"text", value:"", valueUrl:""},
    {id:1,name:"enhance",type:"text", value:"", valueUrl:""},
    {id:1,name:"and",type:"text", value:"", valueUrl:""},
    {id:1,name:" transform",type:"text", value:"", valueUrl:""},
    {id:1,name:"your",type:"text", value:"", valueUrl:""},
    {id:1,name:"videos",type:"text", value:"", valueUrl:""},
    {id:1,name:"like",type:"text", value:"", valueUrl:""},
    {id:1,name:"never before!",type:"text", value:"", valueUrl:""},
    {id:1,name:"pexels-michael-burrows-7129038.jpg",type:"image", value:"", valueUrl:""},
    {id:1,name:"logo-social.png",type:"image", value:"", valueUrl:""},
    {id:1,name:"pexels-andrea-piacquadio-920382.jpg",type:"image", value:"", valueUrl:""},
    {id:1,name:"pexels-george-milton-7014583.jpg",type:"image", value:"", valueUrl:""},
    {id:1,name:"pexels-anna-shvets-5325015.jpg",type:"image", value:"", valueUrl:""},
    {id:1,name:"pexels-artem-podrez-4492216.jpg",type:"image", value:"", valueUrl:""}]}
  ];

  template: {
    id:number;
    name: string;
    preview: string;
    duration: string;
    category: string;
    rating: number;
  }= {id:null,name:"",preview:"y",duration:"",category:"",rating:0};
  templateId: string = "";
  constructor(private route: ActivatedRoute, private templateService: TemplateService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.templateId = params['id']
    });

    this.templates1.forEach((element: any, index: number) => {
      if(element.id == this.templateId) {
        this.template = element;
        this.list = element.assets;
      }
    });
  }

  submitVideo() {
    let imageAssets = "";
    let textAssets = "";
    let assets = "";

    this.list.forEach((element: any, index: number )=> {
      if (element.type == 'image' && element.value !== ""){
        imageAssets = imageAssets + '{"type":"image","layerName":"'+element.name+'","src":"'+element.value+'"},';
      }
      if (element.type == 'image' && element.valueUrl !== ""){
        let val = element.valueUrl;
        val = val.replace('fakepath','Users/Oussema/Downloads').replace('\\','/');
        val = val.replace('\\','/');
        imageAssets = imageAssets + '{"type":"image","layerName":"'+element.name+'","src":"file:///'+val+'"},';
      }
      else if(element.type == 'text' && element.value !== "") {
        textAssets = textAssets + '{"type":"data","layerName":"'+element.name+'","property":"Source Text","value":"'+element.value+'"},';
      }
    })
    
    if(imageAssets.length > 0) {
      imageAssets = imageAssets.slice(0, -1);
    }
    if(textAssets.length > 0) {
      textAssets = textAssets.slice(0, -1);
    }

    if(imageAssets.length > 0 && textAssets.length > 0) {
      assets = imageAssets + ',' + textAssets;
    }
    else if(imageAssets.length > 0) {
      assets = imageAssets;
    } else {
      assets = textAssets;
    }

    let requestBody = '{"template":{"src":"file:///C:/Users/Oussema/Desktop/test/oussema/Adobe After Effects Auto-Save/test auto-save 1.aep","composition":"MS"},"assets":['+assets.replace('\\','/')+'],"actions":{"postrender":[{"module":"@nexrender/action-encode","preset":"mp4","output":"encoded.mp4"},{"module":"@nexrender/action-copy","input":"encoded.mp4","output":"C:/workspace/Ng/shoptv/src/assets/video/'+this.videoName+'.mp4"}]}}'

    if(this.videoName == "") {
      let elem = document.getElementById("azerty");
      elem.scrollIntoView({ behavior: "smooth" });
      $('#videoname').addClass('required');
    }else {
      if(assets == "") {
        if(confirm('do you want to generate the video without changing any variable?') == true) {
          this.templateService.generateVideo(requestBody).subscribe({
            next: (event: any) => {
              console.log('started...');
              console.log('...');
              console.log('...');
            },
            error: (err) => {
              console.log('error');
              console.log(err.error.text.substring(26));
              localStorage.setItem('videoUrl', err.error.text.substring(26));
            },
            complete: () => {
              console.log('completed')
            },
          });
        }
      }
      else {
        this.templateService.generateVideo(requestBody).subscribe({
          next: (event: any) => {
            $('#myvideo').attr('src', event);
          },
          error: (err) => {
            console.log('error');
            console.log(err.error.text.substring(26));
            localStorage.setItem('videoUrl', err.error.text.substring(26));
          },
          complete: () => {
            console.log('completed')
          },
        });
      }
    }
  }

  changeName() {
    $('#videoname').removeClass('required');
  }
}
