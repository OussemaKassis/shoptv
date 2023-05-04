import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { IndexComponent } from "./pages/index/index.component";
import { ProfilepageComponent } from "./pages/examples/profilepage/profilepage.component";
import { RegisterpageComponent } from "./pages/examples/registerpage/registerpage.component";
import { LandingpageComponent } from "./pages/examples/landingpage/landingpage.component";
import { PageLayoutComponent } from "./pages/examples/page-layout/components/page-layout/page-layout.component";
import { TemplatesComponent } from "./pages/examples/page-layout/components/templates/templates.component";
import { DashboardComponent } from "./pages/examples/page-layout/components/dashboard/dashboard.component";
import { VideosComponent } from "./pages/examples/page-layout/components/videos/videos.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: IndexComponent },
  { path: "profile", component: ProfilepageComponent },
  { path: "register", component: RegisterpageComponent },
  { path: "dashboard", component: PageLayoutComponent, children: [
    { path: "", component: DashboardComponent },
    { path: "templates", component: TemplatesComponent },
    { path: "videos", component: VideosComponent },
  ] },
  { path: "landing", component: LandingpageComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: []
})
export class AppRoutingModule {}
