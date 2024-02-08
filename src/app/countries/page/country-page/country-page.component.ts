import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountryService
  ) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(id => {
      this.countriesService.searchCountryByAplhaCode(id).subscribe(country => { console.log(country) })

    })
  }


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
