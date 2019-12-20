import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { BannerHomeComponent } from './components/home/banner-home/banner-home.component';


const routes: Routes = [

  {
    path: 'home',
    component: BannerHomeComponent

  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
