import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { RefreshComponent } from './components/refresh/refresh.component';
import { RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { ListItemComponent } from './components/list/list-item/list-item.component';
import { ModalComponent } from './components/modal/modal.component';

export const DECLARATIONS = [
  HeaderComponent,
  FooterComponent,
  CardComponent,
  RefreshComponent,
  ListComponent,
  ListItemComponent,
  ModalComponent,
];

@NgModule({
  declarations: DECLARATIONS,
  imports: [CommonModule, RouterModule],
  exports: [...DECLARATIONS],
})
export class SharedModule {}
