import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AuthComponent, LoginComponent, ForgetPasswordComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AuthModule { }
