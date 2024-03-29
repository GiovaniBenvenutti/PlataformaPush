import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path : '', redirectTo: 'auth', pathMatch: 'full'},
  { path : 'auth', component: AuthComponent},
  { path : 'painel', loadChildren: () => import('./painel/painel.module').then(m => m.PainelModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

