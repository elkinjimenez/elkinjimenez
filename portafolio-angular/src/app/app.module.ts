import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './modules/about/about.component';
import { AppComponent } from './modules/root/app.component';
import { HomeComponent } from './modules/home/home.component';
import { NavComponent } from './modules/nav/nav.component';
import { FooterComponent } from './modules/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
