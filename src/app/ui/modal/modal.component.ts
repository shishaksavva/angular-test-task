import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    trigger("openClose", [
      state('open', style({
        top: 0,
        background: 'rgba(0, 0, 0, 0.3)',
        opacity: 1
      })),
      state('closed', style({
        top: '-100vh',
        background: 'rgba(0, 0, 0, 0.0)',
        opacity: 0,
      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class ModalComponent implements OnInit {

  @Input()
  public open: boolean = false;

  @Output()
  public close = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onClick(e: Event) {
    if ((e.target as HTMLDivElement).classList.contains("modal-layout")) {
      this.close.emit();
    }
  }
}
