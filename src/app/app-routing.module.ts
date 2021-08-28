import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchComponent } from './Search/Search.component';

const routes: Routes = [
  {
    path: 'homepage',
    loadChildren: () => import('./home-page/home-page.module').then(e => e.HomePageModule)
  },
  // {
  //   path: 'homepage',
  //   component: HomePageComponent
  // }
  {
    path: 'search',
    loadChildren: () => import('./Search/Search.module').then(e => e.SearchModule)
  },
  {
    path: 'playlist',
    loadChildren: () => import('./playlist/playlist.module').then(e => e.PlaylistModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(e => e.LoginModule)
  },
  {
    path:'',
    redirectTo:'homepage',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {preloadingStrategy: PreloadAllModules}
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
