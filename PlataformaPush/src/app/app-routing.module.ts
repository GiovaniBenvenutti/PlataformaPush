import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { PainelComponent } from './painel/painel.component';
//import { NotifierComponent } from './notifier/notifier.component';
//import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path : '', redirectTo: 'auth', pathMatch: 'full', outlet: 'out1' },
  { path : 'auth', component: AuthComponent, outlet: 'out1' },
  { path : 'painel', component: PainelComponent, outlet: 'out1'},
//  { path : 'notifier', component: NotifierComponent, outlet: 'out2' },
//  { path : 'dashboard', component: DashboardComponent, outlet: 'out2' }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

