import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interfaces/interface';

@Injectable({ providedIn: 'root' })
export class CountryService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`
    return this.http.get<Country[]>(url).pipe(
      // tap(countries => console.log('paso por el tap', countries))
      catchError(error => {
        // console.log(error)
        return of([])
      })
    );


  }
  searchRegion(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${term}`
    return this.http.get<Country[]>(url).pipe(
      // tap(countries => console.log('paso por el tap', countries))
      catchError(error => {
        // console.log(error)
        return of([])
      })
    );


  }
  searchCOuntry(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`
    return this.http.get<Country[]>(url).pipe(
      // tap(countries => console.log('paso por el tap', countries))
      catchError(error => {
        // console.log(error)
        return of([])
      })
    );


  }

  searchCountryByAplhaCode(code: string): Observable<Country | null> {
    const url = `${this.apiUrl}/alpha/${code}`;

    return this.http.get<Country[]>(url)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null),

        // tap(countries => console.log('paso por el tap', countries))
        catchError(() => of(null))
      );
  }

}
