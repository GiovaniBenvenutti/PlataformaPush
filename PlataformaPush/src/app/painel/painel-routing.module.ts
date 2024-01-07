
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotifierComponent } from '../notifier/notifier.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

const painelRoutes: Routes = [
  { path : '', redirectTo: 'notifier', pathMatch: 'full'},
  { path: 'notifier', component: NotifierComponent},
  { path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(painelRoutes)],
  exports: [RouterModule]
})
export class PainelRoutingModule { }
