import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { RouterModule } from '@angular/router';
import { CompanyLoginComponent } from './components/company-login/company-login.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AuthComponent, LoginComponent, ForgetPasswordComponent, CompanyLoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class AuthModule { }
