import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];

  constructor(private countryService: CountryService) {

  }

  searchByCapital(term: string): void {

    this.countryService.searchCapital(term).subscribe(countries => {
      this.countries = countries;
    });
    console.log('desde ByCapITALPage')
    console.log({ term });
  }


}
