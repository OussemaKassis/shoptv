import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-login',
  templateUrl: './company-login.component.html',
  styleUrls: ['./company-login.component.scss']
})
export class CompanyLoginComponent implements OnInit {

  username: string = "";
  password: string = "";

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  companyLogin() {
    // let formData = '{"password": "'+this.password+'","rememberMe": false,"username": "'+this.username+'"}'

    // // let formData = new FormData();
    // // formData.append('username', this.username);
    // // formData.append('password', this.password);
    // this.loginService.companyLogin(formData).subscribe({
    //   next: (event: any) => {
    //     localStorage.setItem('token', event.id_token);
    //     localStorage.setItem('company', 'true');
    //     this.router.navigate(['./dashboard/']);
    //   },
    //   error: (err) => {
    //     console.log(err.error.detail);
    //   },
    //   complete: () => {

    //   },
    // })

    localStorage.setItem('token', 'event.id_token');
    localStorage.setItem('company', 'true');
    this.router.navigate(['./dashboard/']);

  }
}
