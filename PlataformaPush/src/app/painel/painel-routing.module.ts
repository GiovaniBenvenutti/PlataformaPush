
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotifierComponent } from '../notifier/notifier.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AuthComponent } from '../auth/auth.component';

const painelRoutes: Routes = [
  { path: 'auth', component: AuthComponent, outlet: 'out1' },
  { path: 'notifier', component: NotifierComponent, outlet: 'out2' },
  { path: 'dashboard', component: DashboardComponent, outlet: 'out2' }
];

@NgModule({
  imports: [RouterModule.forChild(painelRoutes)],
  exports: [RouterModule]
})
export class PainelRoutingModule { }
