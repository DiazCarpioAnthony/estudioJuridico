import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { BannerComponent } from './components/home/banner/banner.component';


const routes: Routes = [
  
  {
    path: 'home',
    component: NavbarComponent,
    children: [{
      path: '',
      component: BannerComponent
    }]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
