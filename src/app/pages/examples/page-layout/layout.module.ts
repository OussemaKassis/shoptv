import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutComponent } from './components/page-layout/page-layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { RouterModule } from '@angular/router';
import { VideosComponent } from './components/videos/videos.component';



@NgModule({
  declarations: [PageLayoutComponent, DashboardComponent, TemplatesComponent, VideosComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }
