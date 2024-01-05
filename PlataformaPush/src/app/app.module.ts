import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './auth/auth.component';
import { CardComponent } from './shared/card/card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotifierComponent } from './notifier/notifier.component';
import { PainelComponent } from './painel/painel.component';
import { PainelModule } from './painel/painel.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    CardComponent,
    DashboardComponent,
    NotifierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PainelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
