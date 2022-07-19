import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input()
  public label: string = "";

  @Input()
  public type: 'primary' | 'secondary' | 'dis' = "primary";

  @Output()
  public click = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(e: Event) {
    e.stopPropagation();
    this.click.emit();
  }
}
