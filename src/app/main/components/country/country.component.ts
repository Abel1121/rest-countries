import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesApiService } from '../../../api/countries/countries-api.service';
import { Observable, tap } from 'rxjs';
import { Country } from '../../../api/countries/models/Country';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit {
  country: string;
  countryDetails: Country;
  currencies: string[] = [];
  countryDetails$: Observable<Country[]>;

  constructor(
    private route: ActivatedRoute,
    private countriesApi: CountriesApiService
  ) {}

  ngOnInit(): void {
    this.getSelectedCountry();
    this.countryDetails$ = this.countriesApi.getCountry(this.country).pipe(
      tap((item) => {
        this.countryDetails = item[0];
        for (const key in item[0].currencies) {
          this.currencies.push(item[0].currencies[key].symbol);
        }
      })
    );
  }

  getSelectedCountry() {
    this.country = this.route.snapshot.paramMap.get('country');
  }
}
