import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './modules/home/home.component';
import { AboutComponent } from './modules/about/about.component';
import { PortfolioComponent } from './modules/portfolio/portfolio.component';
import { StudiesComponent } from './modules/studies/studies.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aboutme', component: AboutComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'studies', component: StudiesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
