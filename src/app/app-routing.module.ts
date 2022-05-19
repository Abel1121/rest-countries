import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './main/components/dashboard/dashboard.component';
import { RegionComponent } from './main/components/region/region.component';
import { CountryComponent } from './main/components/country/country.component';
import { FourZeroFourComponent } from './main/components/four-zero-four/four-zero-four.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'region/:region',
    component: RegionComponent,
  },
  {
    path: 'country/:country',
    component: CountryComponent,
  },
  {
    path: '**',
    component: FourZeroFourComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
