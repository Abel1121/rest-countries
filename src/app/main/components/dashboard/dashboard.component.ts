import { Component, OnInit } from '@angular/core';
import { CountriesApiService } from '../../../api/countries/countries-api.service';
import { Country } from '../../../api/countries/models/Country';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  // regions = ['America', 'Europe', 'Africa', 'Asia', 'Oceania']
  regions: string[] = [];

  constructor(private countriesApi: CountriesApiService) {}

  ngOnInit(): void {
    this.countriesApi.getAllCountries().subscribe((value) => {
      value.filter((item: Country) => {
        if (!this.regions.includes(item.region)) {
          this.regions.push(item.region);
        }
      });
    });
  }
}
