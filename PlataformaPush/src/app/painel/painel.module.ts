import { PainelComponent } from './painel.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PainelRoutingModule } from './painel-routing.module';
import { NotifierComponent } from '../notifier/notifier.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

@NgModule({    
  imports: [
    CommonModule,
    PainelRoutingModule
  ],
  exports: [],
  declarations: [PainelComponent, NotifierComponent, DashboardComponent],
  providers:[]
})
export class PainelModule { }
