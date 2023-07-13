import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from './service/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import $ from 'Jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  focus;
  focus1;
  focus2;
  username: string = "";
  password: string = "";


  verified: boolean = false;
  changed: boolean = false;

  constructor(private route: ActivatedRoute, private loginService: LoginService, private router: Router) {}  

  ngOnInit() {
    this.route.params.subscribe(params => {

      if(params['new'] == 'true') {
        $('.alert1').removeClass('hidden');
      }

      if(params['verified'] == 'changed') {
        this.verified = true;
        this.changed = true;
      }

      if(params['verified'] == 'true') {
        this.verified = true;
        this.changed = false;
      }
    });

    var body = document.getElementsByTagName("body")[0];
    body.classList.add("register-page");
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("register-page");
  }

  login() {
    let data = '{"password": "'+this.password+'","rememberMe": false,"username": "'+this.username+'"}'

    // let data = new FormData();
    // data.append('username', this.username);
    // data.append('password', this.password);
    // data.append('rememberMe', 'false');

    // this.loginService.loginAuth(data).subscribe({
    //   next: (event: any) => {
    //     localStorage.setItem('token', event.id_token);
    //     localStorage.setItem('company', 'false');
    //     this.router.navigate(['./dashboard/']);
    //   },
    //   error: (err) => {
    //     console.log(err.error.detail);
    //   },
    //   complete: () => {

    //   },
    // })

    if(this.verified == true) {
      if($('.oldpass').val() == 'password' && this.changed == false) {
        $('.loading').attr("disabled","disabled");
        $('.loading').removeClass('hidden');
  
        setTimeout(() => {
          $('.formReset').addClass('hidden');
          $('.successModal').removeClass('hidden');
          localStorage.setItem('token', 'event.id_token');
          localStorage.setItem('firstLogin', 'true');
          localStorage.setItem('company', 'false');
          this.router.navigate(['./dashboard/']);
        }, 2500);
      } else if($('.oldpass').val() == 'password' && this.changed == true) {
        $('.loading').attr("disabled","disabled");
        $('.loading').removeClass('hidden');
  
        setTimeout(() => {
          $('.loading').addClass('hidden');
          $('.alert3').removeClass('hidden');
          $('.input-group').addClass('error');        
        }, 2500);
      }
      else if ($('.oldpass').val() == 'passwordpassword' && this.changed == true) {
        $('.loading').attr("disabled","disabled");
        $('.loading').removeClass('hidden');
  
        setTimeout(() => {
          $('.formReset').addClass('hidden');
          $('.successModal').removeClass('hidden');
          localStorage.setItem('token', 'event.id_token');
          localStorage.setItem('firstLogin', 'true');
          localStorage.setItem('company', 'false');
          this.router.navigate(['./dashboard/']);
        }, 2500);
      }

      
    }
    else
    {
      $('.loading').removeClass('hidden');

      setTimeout(() => {
        $('.alert2').removeClass('hidden');
        $('.loading').addClass('hidden');
      }, 2500);
    }
  }

}
