import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalPageComponent } from './page/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './page/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './page/by-region-page/by-region-page.component';
import { CountryPageComponent } from './page/country-page/country-page.component';
import { CountriesRoutingModule } from './countries-routing.module';

@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByCountryPageComponent,
    ByRegionPageComponent,
    CountryPageComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule
  ],
})
export class CountriesModule {}
