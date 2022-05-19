import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { commonEnviroment } from '../../../environments/enviroment.common';
import { Country } from './models/Country';

@Injectable({
  providedIn: 'root',
})
export class CountriesApiService {
  backTo: Subject<string> = new Subject<string>();

  constructor(private http: HttpClient) {}

  getAllCountries(): Observable<Country[]> {
    return this.http
      .get<Country[]>(commonEnviroment.apiEndpoints.ALL_Regions)
      .pipe(tap(() => this.backTo.next('')));
  }

  getRegion(region: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${commonEnviroment.apiEndpoints.REGION}/${region}`)
      .pipe(tap(() => this.backTo.next(`dashboard`)));
  }

  getCountry(country: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${commonEnviroment.apiEndpoints.COUNTRY}/${country}`)
      .pipe(
        tap((item) => {
          console.log(item, 'item');
          this.backTo.next(`/region/${item[0].region}`);
        })
      );
  }
}
