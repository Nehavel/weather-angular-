import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
// import {WeatherService} from './WeatherService';
import { WeatherService } from './weather.service';
import { AppComponent } from './app.component';
import { SummaryComponent } from './components/summary/summary.component';
import { TemperatureComponent } from './components/temperature/temperature.component';
import { TpwComponent } from './components/tpw/tpw.component';
import { ChartComponent } from './components/chart/chart.component';
import { DayTileComponent } from './components/day-tile/day-tile.component';
import { FormComponent } from './form/form/form.component';
// import { Summary } from './models/summary.ts';
// import { DayTileComponent } from './components/day-tile/day-tile.component';


@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    TemperatureComponent,
    TpwComponent,
    ChartComponent,
    DayTileComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
