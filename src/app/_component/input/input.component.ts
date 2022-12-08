import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  email: string = '';
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() type: string = '';
  @Input() name: string = '';
  @Output() inputEmitter: EventEmitter<string> = new EventEmitter();

  sendInput(email: string) {
    console.log('email ' + email + ' envoyé');
  }

  validEmail(email: string) {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      alert('Format Email invalide');
      console.log('Format Email invalide');
    }
  }
}
