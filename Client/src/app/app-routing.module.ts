import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { BannerHomeComponent } from './components/home/banner-home/banner-home.component';
import { BannerAboutComponent } from './components/about/banner-about/banner-about.component';
import { BannerAttorneysComponent } from './components/attorneys/banner-attorneys/banner-attorneys.component';
import { BannerBlogComponent } from './components/blog/banner-blog/banner-blog.component';
import { BannerPracticeAreasComponent } from './components/practiceAreas/banner-practice-areas/banner-practice-areas.component';
import { BannerContactComponent } from './components/contact/banner-contact/banner-contact.component';
import { BannerBlogSingleComponent } from './components/blogSingle/banner-blog-single/banner-blog-single.component';

import { AdministradorLoginComponent } from './components/administrador/administrador-login/administrador-login.component';
import { AdministradorDashboardComponent } from './components/administrador/administrador-dashboard/administrador-dashboard.component';


const routes: Routes = [

  {
    path: 'home',
    component: BannerHomeComponent
  },
  {
    path: 'about',
    component: BannerAboutComponent
  },
  {
    path: 'attorneys',
    component: BannerAttorneysComponent
  },
  {
    path: 'blog',
    component: BannerBlogComponent
  },
  {
    path: 'practiceAreas',
    component: BannerPracticeAreasComponent
  },
  {
    path: 'contact',
    component: BannerContactComponent
  },
  {
    path: 'blogSingle',
    component: BannerBlogSingleComponent
  },
  {
    path: 'administrador',
    component: AdministradorLoginComponent
  },
  {
    path: 'dashboard',
    component: AdministradorDashboardComponent
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }