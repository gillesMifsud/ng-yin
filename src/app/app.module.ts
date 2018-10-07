import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import { CollapseModule } from 'ng2-bootstrap/ng2-bootstrap';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
// Components Pages
import {AppComponent} from "./app.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {FooterComponent} from "./footer/footer.component";
import {HomeComponent} from './home/home.component';
import {CompetencesComponent} from './competences/competences.component';
import {ContactComponent} from './contact/contact.component';
import {ContactService} from './contact/contact.service';
import {ForecastComponent} from './forecast/forecast.component';
import {NotFoundComponent} from './notfound/notfound.component';
import {RealisationsComponent} from './realisations/realisations.component';
import {WeatherComponent} from './weather/weather.component';
// Pipes
import {RoundPipe} from './pipes/round.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CompetencesComponent,
    ContactComponent,
    ForecastComponent,
    NotFoundComponent,
    RealisationsComponent,
    WeatherComponent,
    RoundPipe,
    HomeComponent],
  imports: [
    BrowserModule,
    Ng2BootstrapModule,
    CollapseModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig)],
  providers: [ContactService],
  bootstrap: [AppComponent]
})

export class AppModule {
  public isCollapsed: boolean = true;
}
