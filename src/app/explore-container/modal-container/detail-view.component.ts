import { Component, OnInit, Input } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { Model } from 'src/app/model/model';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss'],
})
export class DetailViewComponent implements OnInit {
  public title:string = "Detail";

  // Data passed in by componentProps
  @Input() order: Model;

  constructor(
    public modalController: ModalController,
  ) { 
    console.log(`creating: ${this.constructor.name}`);
  }

  ngOnInit() {
    console.log(`ngOnInit: ${this.constructor.name}`);
  }

  ngOnDestroy() {
    console.log(`ngOnDestroy: ${this.constructor.name}`);
  }

  public dismiss():void {
    console.log(`dismiss: ${this.constructor.name}`);
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
