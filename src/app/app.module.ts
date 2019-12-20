import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { BannerHomeComponent } from './components/home/banner-home/banner-home.component';
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
import { LoaderComponent } from './components/home/loader/loader.component';
import { BannerAboutComponent } from './components/about/banner-about/banner-about.component';
import { AboutServicesComponent } from './components/about/about-services/about-services.component';
import { AboutFreeConsultComponent } from './components/about/about-free-consult/about-free-consult.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerHomeComponent,
    ServicesComponent,
    AboutComponent,
    MisionVisionComponent,
    PracticeAreasComponent,
    AttorneysComponent,
    FreeConsultComponent,
    ResenasComponent,
    BlogComponent,
    GalleryComponent,
    ValoresComponent,
    FooterComponent,
    LoaderComponent,
    BannerAboutComponent,
    AboutServicesComponent,
    AboutFreeConsultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
