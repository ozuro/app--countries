import { Component, Input } from '@angular/core';
import { Country } from 'src/app/countries/interfaces/interface';

@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html'
})
export class CountryTableComponent {

  @Input()
  public countries: Country[]=[];


}
