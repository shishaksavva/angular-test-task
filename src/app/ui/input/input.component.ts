import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input()
  public type: string = 'text';

  @Input()
  public placeholder: string = "";

  @Input()
  public value!: string

  @Output()
  public valueChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  change(e: any) {
    this.valueChange.emit(e.target.value);
  }
}
