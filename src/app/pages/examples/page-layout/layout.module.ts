import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutComponent } from './components/page-layout/page-layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { RouterModule } from '@angular/router';
import { VideosComponent } from './components/videos/videos.component';
import { AddTemplateComponent } from './components/add-template/add-template.component';
import { GenerateComponent } from './components/generate/generate.component';



@NgModule({
  declarations: [PageLayoutComponent, DashboardComponent, TemplatesComponent, VideosComponent, AddTemplateComponent, GenerateComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }
