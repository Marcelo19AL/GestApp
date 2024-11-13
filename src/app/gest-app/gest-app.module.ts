import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestAppPageRoutingModule } from './gest-app-routing.module';

import { GestAppPage } from './gest-app.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestAppPageRoutingModule
  ],
  declarations: [GestAppPage]
})
export class GestAppPageModule {}
