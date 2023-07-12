import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutComponent } from './components/page-layout/page-layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { RouterModule } from '@angular/router';
import { VideosComponent } from './components/videos/videos.component';
import { AddTemplateComponent } from './components/add-template/add-template.component';
import { GenerateComponent } from './components/generate/generate.component';
import { FormsModule } from '@angular/forms';
import { TemplateComponent } from './components/template/template.component';
import { VideoComponent } from './components/video/video.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CreditCardFormComponent } from './components/credit-card-form/credit-card-form.component';
import { EmployersListComponent } from './components/employers-list/employers-list.component';
import { AddEmployerComponent } from './components/add-employer/add-employer.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { InstagramTemplatesComponent } from './components/instagram-templates/instagram-templates.component';



@NgModule({
  declarations: [PageLayoutComponent, DashboardComponent, TemplatesComponent, VideosComponent, AddTemplateComponent, GenerateComponent, TemplateComponent, VideoComponent, VideoListComponent, ProfileComponent, CreditCardFormComponent, EmployersListComponent, AddEmployerComponent, InstagramTemplatesComponent],
  imports: [
    CommonModule,
    RouterModule,
    ModalModule,
    FormsModule,
  ]
})
export class LayoutModule { }
