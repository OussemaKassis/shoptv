import { Component, OnInit } from '@angular/core';
import { LoginService } from './service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    let data = '{"password": "admin","rememberMe": false,"username": "admin"}'
    this.loginService.loginAuth(data).subscribe({
      next: (event: any) => {
        localStorage.setItem('token', event.id_token);
        this.router.navigate(['./dashboard/']);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {

      },
    })
  }

}
