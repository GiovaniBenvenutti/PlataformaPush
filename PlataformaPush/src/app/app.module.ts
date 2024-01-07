import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './auth/auth.component';
import { PainelComponent } from './painel/painel.component';
import { PainelModule } from './painel/painel.module';
import { NotificationComponent } from './model/notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    NotificationComponent,
  //  PainelComponent
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
