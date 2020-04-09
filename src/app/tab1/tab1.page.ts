import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public title:string = "View"

  constructor() {
    console.log(`creating: ${this.constructor.name}`);
  }

  ngOnInit() {
    console.log(`ngOnInit: ${this.constructor.name}`);
  }

  ionViewWillEnter() {
    console.log(`ionViewWillEnter: ${this.constructor.name}`)
  }

  ionViewDidEnter() {
    console.log(`ionViewDidEnter: ${this.constructor.name}`)
  }

  ionViewWillLeave() {
    console.log(`ionViewWillLeave: ${this.constructor.name}`)
  }

  ionViewDidLeave() {
    console.log(`ionViewDidLeave: ${this.constructor.name}`)
  }

  ngOnDestroy() {
    console.log(`ngOnDestroy: ${this.constructor.name}`);
  }

}
