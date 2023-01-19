import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './modules/about/about.component';
import { AppComponent } from './modules/root/app.component';
import { HomeComponent } from './modules/home/home.component';
import { NavComponent } from './modules/nav/nav.component';
import { FooterComponent } from './modules/footer/footer.component';
import { PortfolioComponent } from './modules/portfolio/portfolio.component';

registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
