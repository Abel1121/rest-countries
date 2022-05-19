import { Component } from '@angular/core';
import { CountriesApiService } from '../../../api/countries/countries-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  backTo: string;

  constructor(private countriesApi: CountriesApiService) {
    this.countriesApi.backTo.subscribe((value) => (this.backTo = value));
  }
}
