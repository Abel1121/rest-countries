import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor(private ms: ModalService) {}

  ngOnInit(): void {}

  showModal() {
    this.ms.title.next('Something about me');
    this.ms.desc.next(
      "My name is Marek, I'm 28 years old and I like going to the gym. I am interested in cars, sports and electronics. Thank you for your attention."
    );
    this.ms.modalDisplay.next(false);
  }
}
