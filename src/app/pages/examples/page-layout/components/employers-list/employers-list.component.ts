import { Component, Input, OnInit, Output  } from '@angular/core';
import $ from 'Jquery';

@Component({
  selector: 'app-employers-list',
  templateUrl: './employers-list.component.html',
  styleUrls: ['./employers-list.component.scss']
})
export class EmployersListComponent implements OnInit {

  numberr = 8;
  users: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    status: string;
  }[] = [
    { id: 0, firstName: "John", lastName: "Doe", email: "john.doe@example.com", status: "active" },
    { id: 1, firstName: "Jane", lastName: "Smith", email: "jane.smith@example.com", status: "inactive" },
    { id: 2, firstName: "Mike", lastName: "Johnson", email: "mike.johnson@example.com", status: "active" },
    { id: 3, firstName: "Emily", lastName: "Brown", email: "emily.brown@example.com", status: "active" },
    { id: 4, firstName: "Alex", lastName: "Davis", email: "alex.davis@example.com", status: "inactive" },
    { id: 5, firstName: "Sarah", lastName: "Miller", email: "sarah.miller@example.com", status: "active" },
    { id: 6, firstName: "David", lastName: "Wilson", email: "david.wilson@example.com", status: "inactive" },
    { id: 7, firstName: "Oussema", lastName: "Kassis", email: "olivia.anderson@example.com", status: "active" }
  ];

  @Input()
  data = {};
  constructor() { }

  ngOnInit(): void {
    $('.btn3').hide();

    let editedUser = localStorage.getItem('editedUser');
    let myArray = editedUser.split(",");
    let userId = myArray[0];

    this.users.forEach((elem: any) => {
      if(elem.id == userId) {
        elem.firstName = myArray[1];
        elem.lastName = myArray[2];
        elem.email = myArray[3];
      }
    })

    setTimeout(() => {
      if(localStorage.getItem('addedUser') !== 'true') {
        document.getElementById('row7').style.display = 'none';
        this.numberr = 7;
      }
    }, 20);
  }

  test(id: number, ev: any) {
    $(ev.target).addClass('hidden');
    $(ev.target.nextSibling).removeClass('hidden');

    $(ev.target.parentElement.parentElement).find('.text').each(function() {
      $(this).hide()
    });

    $(ev.target.parentElement.parentElement).find('.form-group').each(function() {
      $(this).show();
    });
  }

  changeStatus() {
    let id = localStorage.getItem('updateAccountId');
    this.users.forEach((elem: any) => {
      if(elem.id == id) {
        if(elem.status == 'active'){
          elem.status = 'inactive';
        }
        else {
          elem.status = 'active';
        }
      }
    })
  }

  showModal(id: any){
    localStorage.setItem('updateAccountId', id);
  }

  done(id:any, ev:any) {

    $(ev.target.parentElement.parentElement).find('.text').each(function() {
      $(this).show()
    });

    $(ev.target.parentElement.parentElement).find('.form-group').each(function() {
      $(this).hide();
    });
    let editedUser = id;

    this.users.forEach((elem: any) => {
      if(elem.id == id) {
        $(ev.target.parentElement.parentElement).find('.form-control').each(function(e) {
          if(e == 0) {
            elem.firstName = $(this).val()
            editedUser= editedUser + ',' + $(this).val()
          }
          if(e == 1) {
            elem.lastName = $(this).val()
            editedUser= editedUser + ',' + $(this).val()

          }
          if(e == 2) {
            elem.email = $(this).val()
            editedUser= editedUser + ',' + $(this).val()
          }
        });

        editedUser= editedUser + ',active'
      }
    })

localStorage.setItem("editedUser", editedUser);
    
    $(ev.target).addClass('hidden');
    $(ev.target.previousSibling).removeClass('hidden');

  }
}
