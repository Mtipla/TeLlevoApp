import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeSinAPageRoutingModule } from './home-sin-a-routing.module';

import { HomeSinAPage } from './home-sin-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeSinAPageRoutingModule
  ],
  declarations: [HomeSinAPage]
})
export class HomeSinAPageModule {}
