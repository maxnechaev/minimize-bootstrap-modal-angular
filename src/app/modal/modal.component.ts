import { Component, OnInit, Input } from '@angular/core';
import * as $ from "jquery";
import * as bootstrap from "bootstrap";
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

function hello() {
  $(document).ready(function() {
    let $content, $modal, $apnData, $modalCon;
    $content = $(".min");
    //To fire modal
    $(".mdlFire").click(function(e) {
      e.preventDefault();
      let $id = $(this).attr("data-target");
      $($id).modal({
        backdrop: false,
        keyboard: false
      });
    });
    $(".modalMinimize").on("click", function() {
      $modalCon = $(this).closest(".mymodal").attr("id");
      $apnData = $(this).closest(".mymodal");
      $modal = "#" + $modalCon;
      $(".modal-backdrop").addClass("display-none");
      $($modal).toggleClass("min");
      if ($($modal).hasClass("min")) {
        $(".minmaxCon").append($apnData);
        $(this).find("i").toggleClass('fa-minus').toggleClass('fa-clone');
      } else {
        $(".container").append($apnData);
        $(this).find("i").toggleClass('fa-clone').toggleClass('fa-minus');
      }
    });
    $("button[data-dismiss='modal']").click(function() {
      $(this).closest(".mymodal").removeClass("min");
      $(".container").removeClass($apnData);
      $(this).next('.modalMinimize').find("i").removeClass('fa fa-clone').addClass('fa fa-minus');
    });
  });
}

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() name;
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
    hello();
  }
}
