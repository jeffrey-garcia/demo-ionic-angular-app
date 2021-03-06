import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1-container',
  templateUrl: './tab1-container.component.html',
  styleUrls: ['./tab1-container.component.scss'],
})
export class Tab1ContainerComponent implements OnInit {
  
  constructor() {
    console.log(`creating: ${this.constructor.name}`);
  }

  ngOnInit() {
    console.log(`ngOnInit: ${this.constructor.name}`);
  }
  
  ngOnDestroy() {
    console.log(`ngOnDestroy: ${this.constructor.name}`);
  }

}
