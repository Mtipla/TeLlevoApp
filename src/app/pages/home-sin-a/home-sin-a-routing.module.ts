import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeSinAPage } from './home-sin-a.page';

const routes: Routes = [
  {
    path: '',
    component: HomeSinAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeSinAPageRoutingModule {}
