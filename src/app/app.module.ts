import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
