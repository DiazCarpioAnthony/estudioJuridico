import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
import { BannerAttorneysComponent } from './components/attorneys/banner-attorneys/banner-attorneys.component';
import { AttorneysLawyersComponent } from './components/attorneys/attorneys-lawyers/attorneys-lawyers.component';
import { BannerBlogComponent } from './components/blog/banner-blog/banner-blog.component';
import { BlogPublicacionesComponent } from './components/blog/blog-publicaciones/blog-publicaciones.component';
import { BannerPracticeAreasComponent } from './components/practiceAreas/banner-practice-areas/banner-practice-areas.component';
import { PracticeAreasAreasPracticasComponent } from './components/practiceAreas/practice-areas-areas-practicas/practice-areas-areas-practicas.component';
import { BannerContactComponent } from './components/contact/banner-contact/banner-contact.component';
import { ContactFormComponent } from './components/contact/contact-form/contact-form.component';
import { BannerBlogSingleComponent } from './components/blogSingle/banner-blog-single/banner-blog-single.component';
import { BlogSinglePublicacionComponent } from './components/blogSingle/blog-single-publicacion/blog-single-publicacion.component';
import { AdministradorLoginComponent } from './components/administrador/administrador-login/administrador-login.component';
import { AdministradorDashboardComponent } from './components/administrador/administrador-dashboard/administrador-dashboard.component';
import { AdministradorContentComponent } from './components/administrador/administrador-content/administrador-content.component';
import { AdministradorListComponent } from './components/administrador/administrador-list/administrador-list.component';

//Externos
import { NgxPaginationModule } from 'ngx-pagination';
import {NgxParticlesModule} from  'ngx-particlesjs';

//Services
import { UserService } from './services/user.service';
import { PublicacionService } from './services/publicacion.service';
import { CategoriaService } from './services/categoria.service';
import { KeywordService } from './services/keyword.service';
import { AbogadoService } from './services/abogado.service';
import { PageErrorComponent } from './components/page-error/page-error.component';
import { CategoriaListComponent } from './components/administrador/categoria/categoria-list/categoria-list.component';
import { CategoriaNewComponent } from './components/administrador/categoria/categoria-new/categoria-new.component';
import { CategoriaUpdateComponent } from './components/administrador/categoria/categoria-update/categoria-update.component';
import { KeywordListComponent } from './components/administrador/keyword/keyword-list/keyword-list.component';
import { KeywordNewComponent } from './components/administrador/keyword/keyword-new/keyword-new.component';
import { KeywordUpdateComponent } from './components/administrador/keyword/keyword-update/keyword-update.component';
import { AdministradorUpdateComponent } from './components/administrador/administrador-update/administrador-update.component';
import { BlogSingleListComponent } from './components/blogSingle/blog-single-list/blog-single-list.component';
import { BlogSingleAsideComponent } from './components/blogSingle/blog-single-aside/blog-single-aside.component';
import { AbogadoNewComponent } from './components/administrador/abogado/abogado-new/abogado-new.component';
import { AbogadoListComponent } from './components/administrador/abogado/abogado-list/abogado-list.component';
import { AbogadoUpdateComponent } from './components/administrador/abogado/abogado-update/abogado-update.component';

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
    AboutFreeConsultComponent,
    BannerAttorneysComponent,
    AttorneysLawyersComponent,
    BannerBlogComponent,
    BlogPublicacionesComponent,
    BannerPracticeAreasComponent,
    PracticeAreasAreasPracticasComponent,
    BannerContactComponent,
    ContactFormComponent,
    BannerBlogSingleComponent,
    BlogSinglePublicacionComponent,
    AdministradorLoginComponent,
    AdministradorDashboardComponent,
    AdministradorContentComponent,
    AdministradorListComponent,
    PageErrorComponent,
    CategoriaListComponent,
    CategoriaNewComponent,
    CategoriaUpdateComponent,
    KeywordListComponent,
    KeywordNewComponent,
    KeywordUpdateComponent,
    AdministradorUpdateComponent,
    BlogSingleListComponent,
    BlogSingleAsideComponent,
    AbogadoNewComponent,
    AbogadoListComponent,
    AbogadoUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    NgxParticlesModule
  ],
  providers: [
    UserService,
    PublicacionService,
    CategoriaService,
    KeywordService,
    AbogadoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
