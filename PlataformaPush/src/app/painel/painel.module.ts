// painel.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PainelComponent } from './painel.component';
import { PainelRoutingModule } from './painel-routing.module';

@NgModule({
  declarations: [PainelComponent],
  imports: [
    CommonModule,
    PainelRoutingModule
  ]
})
export class PainelModule { }
