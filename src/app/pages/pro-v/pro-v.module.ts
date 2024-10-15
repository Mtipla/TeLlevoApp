import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProVPageRoutingModule } from './pro-v-routing.module';

import { ProVPage } from './pro-v.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProVPageRoutingModule
  ],
  declarations: [ProVPage]
})
export class ProVPageModule {}
