import {Routes} from '@angular/router';
// Components Pages
import {HomeComponent} from './home/home.component';
import {CompetencesComponent} from './competences/competences.component';
import {ContactComponent} from './contact/contact.component';
import {ForecastComponent} from './forecast/forecast.component';
import {NotFoundComponent} from './notfound/notfound.component';
import {RealisationsComponent} from './realisations/realisations.component';
import {WeatherComponent} from './weather/weather.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'contact', component: ContactComponent },
    { path: 'competences', component: CompetencesComponent },
    { path: 'realisations', component: RealisationsComponent },
    { path: 'weather', component: WeatherComponent },
    { path: 'forecast', component: ForecastComponent },
    { path: '**', component: NotFoundComponent }
];

