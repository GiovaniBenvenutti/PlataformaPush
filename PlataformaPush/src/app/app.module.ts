import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './auth/auth.component';
import { PainelModule } from './painel/painel.module';
import { CardComponent } from './shared/card/card.component';
import { TextComponent } from './shared/text/text.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PainelModule,
    CardComponent,
    TextComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
