import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../../api/countries/models/Country';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() regionDetails: Country[];

  constructor() {}

  ngOnInit(): void {}
}
