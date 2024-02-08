import { Component } from '@angular/core';
import { Country } from '../../interfaces/interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {
  public countries: Country[] = [];

  constructor(private countryService: CountryService) {

  }

  searchByCountry(term: string): void {

    this.countryService.searchCOuntry(term).subscribe(countries => {
      this.countries = countries;
    });
    console.log('desde ByCountryPage')
    console.log({ term });
  }


}
