import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3-page',
  templateUrl: './tab3-page.component.html',
  styleUrls: ['./tab3-page.component.scss'],
})
export class Tab3PageComponent implements OnInit {

  public title:string = "Sync"

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
