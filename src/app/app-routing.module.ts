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
import { LoginComponent } from "./pages/examples/auth/components/login/login.component";
import { ForgetPasswordComponent } from "./pages/examples/auth/components/forget-password/forget-password.component";
import { AuthComponent } from "./pages/examples/auth/auth.component";
import { AddTemplateComponent } from "./pages/examples/page-layout/components/add-template/add-template.component";
import { TemplateComponent } from "./pages/examples/page-layout/components/template/template.component";
import { VideoListComponent } from "./pages/examples/page-layout/components/video-list/video-list.component";
import { VideoComponent } from "./pages/examples/page-layout/components/video/video.component";
import { PricingComponent } from "./pages/examples/pricing/pricing.component";
import { CompanyLoginComponent } from "./pages/examples/auth/components/company-login/company-login.component";
import { ProfileComponent } from "./pages/examples/page-layout/components/profile/profile.component";
import { CreditCardFormComponent } from "./pages/examples/page-layout/components/credit-card-form/credit-card-form.component";
import { AddEmployerComponent } from "./pages/examples/page-layout/components/add-employer/add-employer.component";
import { EmployersListComponent } from "./pages/examples/page-layout/components/employers-list/employers-list.component";
import { ResetPasswordComponent } from "./pages/examples/auth/components/reset-password/reset-password.component";
import { InstagramTemplatesComponent } from "./pages/examples/page-layout/components/instagram-templates/instagram-templates.component";
import { YoutubeTemplatesComponent } from "./pages/examples/page-layout/components/youtube-templates/youtube-templates.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: IndexComponent },
  { path: "denns/login", component: CompanyLoginComponent },
  { path: "profile", component: ProfilepageComponent },
  { path: "dashboard", component: PageLayoutComponent, children: [
    { path: "", component: DashboardComponent },
    { path: "templates", component: TemplatesComponent },
    { path: "pricing", component: PricingComponent },
    { path: "bank-transfer", component: CreditCardFormComponent },
    { path: "profile", component: ProfileComponent },
    { path: "employees", component: EmployersListComponent },
    { path: "create-employee", component: AddEmployerComponent },
    { path: "videos", component: VideosComponent },
    { path: "videos/video-list/:cat", component: VideoListComponent },
    { path: "template/:id", component: TemplateComponent },
    { path: "instagram-templates", component: InstagramTemplatesComponent },
    { path: "youtube-templates", component: YoutubeTemplatesComponent },
    { path: "video/:id", component: VideoComponent },
    { path: "add-template", component: AddTemplateComponent },
  ] },
  { path: "auth", component: AuthComponent, children: [
    { path: "", redirectTo: "login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "login/:new", component: LoginComponent },
    { path: "login/:new/:verified", component: LoginComponent },
    { path: "register", component: RegisterpageComponent },
    { path: "reset-password", component: ForgetPasswordComponent },
    { path: "verify-account", component: ResetPasswordComponent },
  ] },
  { path: "landing", component: LandingpageComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    // RouterModule.forRoot(routes, {
    //   useHash: true
    // })
  ],
  exports: []
})
export class AppRoutingModule {}
