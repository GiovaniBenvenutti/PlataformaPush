import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { PainelComponent } from './painel/painel.component';

const routes: Routes = [

  { path : 'auth', component: AuthComponent},
  { path : 'painel', component: PainelComponent}, 
  { path : '', redirectTo: 'auth', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

