import { Component } from '@angular/core';
import { ModalComponent } from 'src/app/modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private modalService: NgbModal) {}

  public openDialog() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.name = 'World';
  }
}
