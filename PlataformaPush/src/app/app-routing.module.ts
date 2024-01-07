import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { PainelComponent } from './painel/painel.component';
import { NotifierComponent } from './notifier/notifier.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path : '', redirectTo: 'auth', pathMatch: 'full'},
  { path : 'auth', component: AuthComponent},
  { path : 'painel', component: PainelComponent, children: [    
    { path : 'notifier', component: NotifierComponent},
    { path : 'dashboard', component: DashboardComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

