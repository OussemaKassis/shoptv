import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  generationStep: string = "Rendering";
  progressVal: number = 0;

  list: {
    id: number;
    layoutname: string;
    name: string;
    type: string;
    value: string;
    valueUrl:string;
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
      layoutname: string;
      name: string;
      type: string;
      value: string;
      valueUrl:string;
    }[];
  }[] = [
    {id:0, name:"ShopTv", duration:"00:00:11", preview:"/assets/video/MS.mp4", category:"facebook", rating: 5, assets: [
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

  template: {
    id:number;
    name: string;
    preview: string;
    duration: string;
    category: string;
    rating: number;
  }= {id:null,name:"",preview:"y",duration:"",category:"",rating:0};
  templateId: string = "";
  constructor(private route: ActivatedRoute, private templateService: TemplateService, private router: Router) { }

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

  submitVideo(event) {
    event.preventDefault();
    let imageAssets = "";
    let textAssets = "";
    let assets = "";

    this.list.forEach((element: any, index: number )=> {
      if (element.type == 'image' && element.value !== ""){
        imageAssets = imageAssets + '{"type":"image","layerName":"'+element.layoutname+'","src":"'+element.value+'"},';
      }
      if (element.type == 'image' && element.valueUrl !== ""){
        let val = element.valueUrl;
        val = val.replace('fakepath','Users/Oussema/Downloads/ShopTV AF Template/images').replace('\\','/');
        val = val.replace('\\','/');
        imageAssets = imageAssets + '{"type":"image","layerName":"'+element.layoutname+'","src":"file:///'+val+'"},';
      }
      else if(element.type == 'text' && element.value !== "") {
        textAssets = textAssets + '{"type":"data","layerName":"'+element.layoutname+'","property":"Source Text","value":"'+element.value+'"},';
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

    localStorage.setItem('creationDate', 'a moment ago');

    let requestBody = '{"template":{"src":"file:///C:/Users/Oussema/Desktop/test/oussema/Adobe After Effects Auto-Save/test auto-save 1.aep","composition":"MS"},"assets":['+assets.replace('\\','/')+'],"actions":{"postrender":[{"module":"@nexrender/action-encode","preset":"mp4","output":"encoded.mp4"},{"module":"@nexrender/action-copy","input":"encoded.mp4","output":"C:/workspace/Ng/shoptv/src/assets/video/'+this.videoName+'.mp4"}]}}';

    if(this.videoName == "") {
      let elem = document.getElementById("azerty");
      elem.scrollIntoView({ behavior: "smooth" });
      $('#videoname').addClass('required');
      $('.alert69').removeClass('hidden');
    }else {
      if(assets == "") {
        if(confirm('do you want to generate the video without changing any variable?') == true) {
          $('.m-model').removeClass('hidden');
          this.myFunction();
          setTimeout(() => {
            this.generationStep = "Setting up job..";
          }, 1000);
          setTimeout(() => {
            this.generationStep = "Downloading assets..";
          }, 3000);
          setTimeout(() => {
            this.generationStep = "Scanning assets..";
          }, 15000);
          setTimeout(() => {
            this.generationStep = "applying postdownload actions..";
          }, 23000);
          setTimeout(() => {
            this.generationStep = "applying prerender actions..";
          }, 24000);
          setTimeout(() => {
            this.generationStep = "running script assemble..";
          }, 25000);
          setTimeout(() => {
            $('#simpletext').html('Progress');
            this.generationStep = "rendering job..";
          }, 30000);
          setTimeout(() => {
            this.progress();
            this.templateService.generateVideo(requestBody).subscribe({
              next: (event: any) => {
                $('.m-model').addClass('hidden');
              },
              error: (err) => {
                $('.m-model').addClass('hidden');
                console.log('error');
                console.log(err.error.text.substring(26));
                localStorage.setItem('videoUrl', err.error.text.substring(26));
                localStorage.setItem('videoGenerated', 'true');
                localStorage.setItem('tries',(parseInt(localStorage.getItem('tries')) - 1).toString());
                this.router.navigate(['./dashboard/video/99']);
              },
              complete: () => {
              },
            });
          }, 30000); 
        }
      }
      else {
        $('.m-model').removeClass('hidden');
        this.myFunction();
        setTimeout(() => {
          this.generationStep = "Setting up job..";
        }, 1000);
        setTimeout(() => {
          this.generationStep = "Downloading assets..";
        }, 3000);
        setTimeout(() => {
          this.generationStep = "Scanning assets..";
        }, 15000);
        setTimeout(() => {
          this.generationStep = "applying postdownload actions..";
        }, 23000);
        setTimeout(() => {
          this.generationStep = "applying prerender actions..";
        }, 24000);
        setTimeout(() => {
          this.generationStep = "running script assemble..";
        }, 25000);
        setTimeout(() => {
          $('#simpletext').html('Progress');
          this.generationStep = "rendering job..";
        }, 30000);
        setTimeout(() => {
          this.progress();
          this.templateService.generateVideo(requestBody).subscribe({
            next: (event: any) => {
              $('.m-model').addClass('hidden');
            },
            error: (err) => {
              $('.m-model').addClass('hidden');
              console.log('error');
              console.log(err.error.text.substring(26));
              localStorage.setItem('videoUrl', err.error.text.substring(26));
              localStorage.setItem('videoName', this.videoName);
              localStorage.setItem('videoCategory', this.videoName);
              localStorage.setItem('videoGenerated', 'true');
              localStorage.setItem('tries',(parseInt(localStorage.getItem('tries')) - 1).toString());
              this.router.navigate(['./dashboard/video/99']);
            },
            complete: () => {
            },
          });
        }, 30000);
        
      }
    }
  }

  changeName() {
    $('#videoname').removeClass('required');
  }

  myFunction() {
    let that = this;
    var totalSeconds = 0;
    setInterval(function (that) {
      var minutesLabel = document.getElementById("minutes");
      var secondsLabel = document.getElementById("seconds");
      totalSeconds = ++totalSeconds;
      secondsLabel.innerHTML = that.pad(totalSeconds % 60);
      minutesLabel.innerHTML = totalSeconds >= 60  ?  that.pad(Math.trunc(totalSeconds / 60)) : '00';
    }, 1000, that, totalSeconds);
  }

  pad(val: any) {
    var valString = val + "";
    if (valString.length < 2) {
      return "0" + valString;
    } else {
      return valString;
    }
  }

  progress() {
    var that = this;
    setInterval(function () {
      var progressBar = document.getElementById("progressBar");
      var progressValue = document.getElementById("progressVal");
      that.progressVal = that.progressVal + Math.random() * (3.2 - 2.5) + 2.5;
      if(that.progressVal<= 100) {
        $(progressBar).css('width', that.progressVal+'%');
        $(progressValue).html(that.progressVal.toFixed(2)+'%');
      } else {
        that.generationStep = "Cleaning Up.."
        $(progressBar).css('width', '100%');
        $(progressBar).css('background-color', 'green');
        $(progressValue).html('100%');
      }
    }, 5000, that,  that.progressVal);
  }
}
