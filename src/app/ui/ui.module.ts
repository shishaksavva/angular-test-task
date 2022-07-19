import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonComponent } from './button/button.component';
import { ModalComponent } from './modal/modal.component';
import { InputComponent } from './input/input.component';



@NgModule({
  declarations: [
    ButtonComponent,
    ModalComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
  ],
  exports: [
    ButtonComponent,
    ModalComponent,
    InputComponent,
  ]
})
export class UiModule { }
