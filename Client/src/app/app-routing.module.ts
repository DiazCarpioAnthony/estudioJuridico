import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { NavbarComponent } from './components/shared/navbar/navbar.component';

import { BannerHomeComponent } from './components/home/banner-home/banner-home.component';
import { BannerAboutComponent } from './components/about/banner-about/banner-about.component';
import { BannerAttorneysComponent } from './components/attorneys/banner-attorneys/banner-attorneys.component';
import { BannerBlogComponent } from './components/blog/banner-blog/banner-blog.component';
import { BannerPracticeAreasComponent } from './components/practiceAreas/banner-practice-areas/banner-practice-areas.component';
import { BannerContactComponent } from './components/contact/banner-contact/banner-contact.component';
import { BannerBlogSingleComponent } from './components/blogSingle/banner-blog-single/banner-blog-single.component';
import { BlogSinglePublicacionComponent } from './components/blogSingle/blog-single-publicacion/blog-single-publicacion.component';
import { BlogSingleListComponent } from './components/blogSingle/blog-single-list/blog-single-list.component';

import { AdministradorLoginComponent } from './components/administrador/administrador-login/administrador-login.component';
import { AdministradorDashboardComponent } from './components/administrador/administrador-dashboard/administrador-dashboard.component';
import { AdministradorContentComponent } from './components/administrador/administrador-content/administrador-content.component';
import { AdministradorListComponent } from './components/administrador/administrador-list/administrador-list.component';
import { AdministradorUpdateComponent } from './components/administrador/administrador-update/administrador-update.component';

import { CategoriaNewComponent } from './components/administrador/categoria/categoria-new/categoria-new.component';
import { CategoriaUpdateComponent } from './components/administrador/categoria/categoria-update/categoria-update.component';
import { CategoriaListComponent } from './components/administrador/categoria/categoria-list/categoria-list.component';

import { KeywordListComponent } from './components/administrador/keyword/keyword-list/keyword-list.component';
import { KeywordNewComponent } from './components/administrador/keyword/keyword-new/keyword-new.component';
import { KeywordUpdateComponent } from './components/administrador/keyword/keyword-update/keyword-update.component';

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
    component: NavbarComponent,
    children: [
      {
        path: ':id',
        component: BannerBlogSingleComponent,
        children: [
          {
            path: '',
            component: BlogSinglePublicacionComponent
          }
        ]
      },
      {
        path: 'categoria',
        component: BannerBlogSingleComponent,
        children: [
          {
            path: ':idCategoria',
            component: BlogSingleListComponent
          }
        ]
      }
    ]
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
        path: 'list',
        component: AdministradorListComponent
      },
      {
        path: 'update/:id',
        component: AdministradorUpdateComponent
      },
      {
        path: 'categoria',
        component: CategoriaNewComponent
      },
      {
        path: 'categoria/list',
        component: CategoriaListComponent
      },
      {
        path: 'categoria/update/:id',
        component: CategoriaUpdateComponent
      },

      {
        path: 'keyword',
        component: KeywordNewComponent
      },
      {
        path: 'keyword/list',
        component: KeywordListComponent
      },
      {
        path: 'keyword/update/:id',
        component: KeywordUpdateComponent
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
