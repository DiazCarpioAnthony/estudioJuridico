import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { BannerComponent } from './components/home/banner/banner.component';
import { ServicesComponent } from './components/home/services/services.component';
import { AboutComponent } from './components/home/about/about.component';
import { MisionVisionComponent } from './components/home/mision-vision/mision-vision.component';
import { PracticeAreasComponent } from './components/home/practice-areas/practice-areas.component';
import { AttorneysComponent } from './components/home/attorneys/attorneys.component';
import { FreeConsultComponent } from './components/home/free-consult/free-consult.component';
import { ResenasComponent } from './components/home/resenas/resenas.component';
import { BlogComponent } from './components/home/blog/blog.component';
import { GalleryComponent } from './components/home/gallery/gallery.component';
import { ValoresComponent } from './components/home/valores/valores.component';
import { FooterComponent } from './components/shared/footer/footer.component';


const routes: Routes = [

  {
    path: 'home',
    component: NavbarComponent,
    children: [{
      path: '',
      component: BannerComponent,
      children: [{
        path: '',
        component: ServicesComponent,
        children: [{
          path: '',
          component: AboutComponent,
          children: [{
            path: '',
            component: MisionVisionComponent,
            children: [{
              path: '',
              component: PracticeAreasComponent,
              children: [{
                path: '',
                component: AttorneysComponent,
                children: [{
                  path: '',
                  component: FreeConsultComponent,
                  children: [{
                    path: '',
                    component: ResenasComponent,
                    children: [{
                      path: '',
                      component: BlogComponent,
                      children: [{
                        path: '',
                        component: GalleryComponent,
                        children: [{
                          path: '',
                          component: ValoresComponent,
                          children: [{
                            path: '',
                            component: FooterComponent
                          }]
                        }]
                      }]
                    }]
                  }]
                }]
              }]
            }]
          }]
        }]
      }]
    }]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
