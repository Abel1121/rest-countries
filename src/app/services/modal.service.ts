import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  modalDisplay: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  title: Subject<string> = new Subject<string>();
  desc: Subject<string> = new Subject<string>();

  constructor() {}

  showModal(title?: string, desc?: string) {
    this.modalDisplay.next(false);
    title ? this.title.next(title) : this.title.next('Something about me');
    desc
      ? this.desc.next(desc)
      : this.desc.next('My name is Mark, thanks for your attention');
  }

  closeModal() {
    this.modalDisplay.next(true);
  }
}
