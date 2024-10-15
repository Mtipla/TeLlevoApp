import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VViajePage } from './v-viaje.page';

const routes: Routes = [
  {
    path: '',
    component: VViajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VViajePageRoutingModule {}
