import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LayoutSiteComponent } from "./shared/layout-site/layout-site.component";
import { MainComponent } from "./components/main/main.component";
import { ServicesComponent } from "./components/services/services.component";
import { PortfolioComponent } from "./components/portfolio/portfolio.component";
import { SingComponent } from "./components/sing/sing.component";
import { AboutComponent } from "./components/about/about.component";
import { ManicureServiceComponent } from "./components/manicure-service/manicure-service.component";
import { PedicureServiceComponent } from "./components/pedicure-service/pedicure-service.component";
import { MomentPipe } from "./shared/moment.pipe";
import { RusPipe } from "./shared/rus.pipe";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { SearchPipe } from "./shared/search.pipe";

@NgModule({
  declarations: [
    AppComponent,
    LayoutSiteComponent,
    MainComponent,
    ServicesComponent,
    PortfolioComponent,
    SingComponent,
    AboutComponent,
    ManicureServiceComponent,
    PedicureServiceComponent,
    MomentPipe,
    RusPipe,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
