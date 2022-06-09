import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutSiteComponent} from './shared/layout-site/layout-site.component';
import {MainComponent} from './components/main/main.component';
import {ServicesComponent} from './components/services/services.component';
import {AboutComponent} from './components/about/about.component';
import {SingComponent} from './components/sing/sing.component';
import {PortfolioComponent} from './components/portfolio/portfolio.component';
import {PedicureServiceComponent} from './components/pedicure-service/pedicure-service.component';
import {ManicureServiceComponent} from './components/manicure-service/manicure-service.component';


const routes: Routes = [
  {path: '', component: LayoutSiteComponent, children: [
      {path: '', redirectTo: 'main', pathMatch: 'full'},
      {path: 'main', component: MainComponent},
      {path: 'services', component: ServicesComponent},
      {path: 'services/pedicure', component: PedicureServiceComponent},
      {path: 'services/manicure', component: ManicureServiceComponent},
      {path: 'about', component: AboutComponent},
      {path: 'sing', component: SingComponent},
      {path: 'portfolio', component: PortfolioComponent}
    ]},
  {path: 'admin', loadChildren: './admin/admin.module#AdminModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
