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
import { AdministradorContentComponent } from './components/administrador/administrador-content/administrador-content.component';
import { AdministradorBlankComponent } from './components/administrador/administrador-blank/administrador-blank.component';

//Guard
import { AuthGuard } from './guards/auth.guard';
import { AuthLoginGuard } from './guards/auth-login.guard';

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
    component: AdministradorLoginComponent,
    canActivate: [AuthLoginGuard]
  },
  {
    path: 'dashboard',
    component: AdministradorDashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: AdministradorContentComponent
      },
      {
        path: 'blank',
        component: AdministradorBlankComponent
      },
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
