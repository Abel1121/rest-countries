import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { RegionComponent } from './components/region/region.component';
import { CountryComponent } from './components/country/country.component';
import { FourZeroFourComponent } from './components/four-zero-four/four-zero-four.component';

@NgModule({
  declarations: [
    DashboardComponent,
    RegionComponent,
    CountryComponent,
    FourZeroFourComponent,
  ],
  imports: [CommonModule, SharedModule],
})
export class MainModule {}
