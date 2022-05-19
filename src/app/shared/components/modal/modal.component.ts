import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  title: string;
  description: string;

  displayNone = false;

  constructor(private ms: ModalService) {}

  ngOnInit(): void {
    this.ms.modalDisplay.subscribe((item) => {
      this.displayNone = item;
    });
    this.ms.title.subscribe((item) => {
      this.title = item;
    });
    this.ms.desc.subscribe((item) => {
      this.description = item;
    });
  }

  closeModal() {
    this.displayNone = true;
  }
}
