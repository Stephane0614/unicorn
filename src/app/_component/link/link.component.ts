import { Component, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent {

  route: string = "";

  @Output() clickEmitter: EventEmitter<any|null> = new EventEmitter<any|null>();


  emitClick(route: string){
    this.route = route;
    console.log("click")
  }


  // @Input() route: String;
  // @Input() src: string;

}
