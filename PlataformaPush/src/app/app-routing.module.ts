import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { NotifierComponent } from './notifier/notifier.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PainelComponent } from './painel/painel.component';

const routes: Routes = [

  { path : 'auth', component: AuthComponent, outlet: 'routerPrincipal' },
  { path : 'painel', component: PainelComponent, outlet: 'routerPrincipal' }, 
//  { path : 'notifier', component: NotifierComponent, outlet: 'routerPainel' },
//  { path : 'dashboard', component: DashboardComponent, outlet: 'routerPainel' }, 
  { path : '', redirectTo: 'auth', pathMatch: 'full', outlet: 'routerPrincipal' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

