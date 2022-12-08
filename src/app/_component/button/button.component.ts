import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() type: string = '';
  @Input() name: string = '';
  @Input() class: string = '';
  @Input() src: string = '';
  @Input() alt: string = '';
}
