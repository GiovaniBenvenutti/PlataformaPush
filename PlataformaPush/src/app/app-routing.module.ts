import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { PainelComponent } from './painel/painel.component';

const routes: Routes = [
  { path : '', redirectTo: 'auth', pathMatch: 'full', outlet: 'out1' },
  { path : 'auth', component: AuthComponent, outlet: 'out1' },
  { path : 'painel', component: PainelComponent, outlet: 'out1' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

