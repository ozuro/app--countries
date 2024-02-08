import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/interface';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent {

  // public country?: Country;

  // constructor(
  //   private activatedRoute: ActivatedRoute,
  //   private router: Router,
  //   private countriesService: countryService,
  // ) {}

  // ngOnInit(): void {

  //   this.activatedRoute.params
  //     .pipe(
  //       switchMap( ({ id }) => this.countriesService.searchCountryByAlphaCode( id )),
  //     )
  //     .subscribe( country => {
  //       if ( !country ) return this.router.navigateByUrl('');
  //       return this.country = country;
  //     });
  // }

}
