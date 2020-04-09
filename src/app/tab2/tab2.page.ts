import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public title:string = "Add";

  public messageSubtitle:string = "Fill up the necessary fields and click save";

  public messageTitle:string = "";

  constructor() {
    console.log(`creating: ${this.constructor.name}`);
  }

}
