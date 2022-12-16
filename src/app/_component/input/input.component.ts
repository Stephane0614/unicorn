import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  email: string = '';
  @Input() style!: string;
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() type: string = '';
  @Input() name: string = '';
  @Input() id:string ="";
  @Output() inputEmitter: EventEmitter<string> = new EventEmitter();

  sendInput(email: string) {
    console.log('email ' + email + ' envoyé');
  }


}
