import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public title:string = "Sync"

  constructor() {
    console.log(`creating: ${this.constructor.name}`);
  }

}
