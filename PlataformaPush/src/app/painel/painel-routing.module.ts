// painel-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotifierComponent } from '../notifier/notifier.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

const routes: Routes = [
  { path: 'notifier', component: NotifierComponent, outlet: 'routerPainel' },
  { path: 'dashboard', component: DashboardComponent, outlet: 'routerPainel' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PainelRoutingModule { }
