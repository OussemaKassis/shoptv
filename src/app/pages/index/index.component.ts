import { Component, OnInit, OnDestroy } from "@angular/core";
import noUiSlider from "nouislider";
import $ from 'jquery';

@Component({
  selector: "app-index",
  templateUrl: "index.component.html",
  styleUrls: ["index.component.scss"],
})
export class IndexComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  focus;
  focus1;
  focus2;
  date = new Date();
  pagination = 3;
  pagination1 = 1;
  constructor() {}
  scrollToDownload(element: any) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  ngOnInit() {
    this.scroll();
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("index-page");

    var slider = document.getElementById("sliderRegular");

    noUiSlider.create(slider, {
      start: 40,
      connect: false,
      range: {
        min: 0,
        max: 100
      }
    });

    var slider2 = document.getElementById("sliderDouble");

    noUiSlider.create(slider2, {
      start: [20, 60],
      connect: true,
      range: {
        min: 0,
        max: 100
      }
    });
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("index-page");
  }

  scroll() {
    $(document).on("scroll", function(){
      let sectionScroll = document.getElementById("scrollElem");
      let elemHeight = $(sectionScroll).height();
      let scrollTop = $(window).scrollTop();
      let winHeight = $(window).height();
      let scrollPercent = (scrollTop) / (elemHeight - winHeight);
      let scrollPercentRounded = Math.round(scrollPercent*100);
      let textElem = document.getElementById("textElem");
      let real =  0;
      if(-600 > scrollPercentRounded && scrollPercentRounded > -1800) {
        real = (scrollPercentRounded + 600) / 10;
      }
      console.log(real)
      $(textElem).css('--gradient-x',-real+'%');
    })
  }
}
