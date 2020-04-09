import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2-container',
  templateUrl: './tab2-container.component.html',
  styleUrls: ['./tab2-container.component.scss'],
})
export class Tab2ContainerComponent implements OnInit {

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
