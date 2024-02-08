import { Component } from '@angular/core';
import { Country } from '../../interfaces/interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {
  public countries: Country[] = [];

  constructor(private countryService: CountryService) {

  }

  searchByRegion(term: string): void {

    this.countryService.searchRegion(term).subscribe(countries => {
      this.countries = countries;
    });
    console.log('desde ByCountryPage')
    console.log({ term });
  }



}
