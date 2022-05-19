import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesApiService } from '../../../api/countries/countries-api.service';
import { Observable, tap } from 'rxjs';
import { Country } from '../../../api/countries/models/Country';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss'],
})
export class RegionComponent implements OnInit {
  region: string;
  regionDetails: Country[];
  regionDetails$: Observable<Country[]>;

  constructor(
    private route: ActivatedRoute,
    private countriesApi: CountriesApiService
  ) {}

  ngOnInit(): void {
    this.getSelectedRegion();
    this.regionDetails$ = this.countriesApi
      .getRegion(this.region)
      .pipe(tap((item) => (this.regionDetails = item)));
  }

  getSelectedRegion() {
    this.region = this.route.snapshot.paramMap.get('region');
  }
}
