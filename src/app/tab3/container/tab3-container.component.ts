import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3-container',
  templateUrl: './tab3-container.component.html',
  styleUrls: ['./tab3-container.component.scss'],
})
export class Tab3ContainerComponent implements OnInit {

  constructor() {
    console.log(`creating: ${this.constructor.name}`);
  }

  ngOnInit() {
    console.log(`ngOnInit: ${this.constructor.name}`);
  }

  ngOnDestroy() {
    console.log(`ngOnDestroy: ${this.constructor.name}`)
  }

}
