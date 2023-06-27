import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-add-template',
  templateUrl: './add-template.component.html',
  styleUrls: ['./add-template.component.scss']
})
export class AddTemplateComponent implements OnInit {
  list: {
    id:number;
    name: string;
    layoutName: string;
    type: string;
  }[] = [{id:0,name:"",layoutName:"",type:""}];
  constructor() { }

  ngOnInit(): void {
    $(document).on("change", ".file_multi_video", function(evt) {
      var $source = $('#video_here');
      $source[0].src = URL.createObjectURL(this.files[0]);
      $source.parent()[0].load();
    });
  }

  addField() {
  let id = this.list.length;
  let fields = {
    id:id,
      name: "",
      layoutName: "",
      type: "",
    }
    this.list.push(fields);
    console.log(this.list);
  }

  deleteField(id) {
    console.log(id);
    let deleted = false;
    this.list.forEach((element: any, index: number) => {

      console.log(element.id);
      if((element.id == id) && (!deleted)) {
        console.log("yes")
        this.list.splice(index , 1);
        deleted = true;
      }
    });

    this.list.forEach((element: any, index: number) => {
      element.id = index;
    });
  }

  getFile(element) {
    console.log(element.target.files[0]);
    $("#file-name").html(element.target.files[0].name)
  }

}
