import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'splash',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'pro-v',
    loadChildren: () => import('./pages/pro-v/pro-v.module').then( m => m.ProVPageModule)
  },
  {
    path: 'pro-d',
    loadChildren: () => import('./pages/pro-d/pro-d.module').then( m => m.ProDPageModule)
  },
  {
    path: 'v-viaje',
    loadChildren: () => import('./pages/v-viaje/v-viaje.module').then( m => m.VViajePageModule)
  },
  {
    path: 'recp-c',
    loadChildren: () => import('./pages/recp-c/recp-c.module').then( m => m.RecpCPageModule)
  },
  {
    path: 'cancelar-v',
    loadChildren: () => import('./pages/cancelar-v/cancelar-v.module').then( m => m.CancelarVPageModule)
  },
  {
    path: 'home-sin-a',
    loadChildren: () => import('./pages/home-sin-a/home-sin-a.module').then( m => m.HomeSinAPageModule)
  },
  {
    path: 'buscar-v',
    loadChildren: () => import('./pages/buscar-v/buscar-v.module').then( m => m.BuscarVPageModule)
  },
  {
    path: 'crud',
    loadChildren: () => import('./pages/crud/crud.module').then( m => m.CrudPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
