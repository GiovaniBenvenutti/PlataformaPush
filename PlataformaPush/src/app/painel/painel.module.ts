// painel.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PainelComponent } from './painel.component';
import { PainelRoutingModule } from './painel-routing.modulel';
import { CardComponent } from '../shared/card/card.component';
import { TextComponent } from '../shared/text/text.component';
import { NotifierComponent } from '../notifier/notifier.component';

@NgModule({
  declarations: [PainelComponent, NotifierComponent],
  imports: [
    CommonModule,
    PainelRoutingModule,
    CardComponent,
    TextComponent
  ]
})
export class PainelModule { }
