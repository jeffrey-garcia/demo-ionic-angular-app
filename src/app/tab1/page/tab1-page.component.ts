import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { LoadingController, ModalController } from '@ionic/angular';

import { DetailViewComponent } from '../../explore-container/modal-container/detail-view.component';
import { Model } from 'src/app/model/model';
import { EventService } from 'src/app/service/event-service.service';

@Component({
  selector: 'app-tab1-page',
  templateUrl: './tab1-page.component.html',
  styleUrls: ['./tab1-page.component.scss'],
})
export class Tab1PageComponent implements OnInit {
  public title:string = "View";

  private items:Model[] = [];
  public items$:Observable<Model[]> = of(this.items);

  private fetchDataCompleted: Subscription;

  constructor(
    public loadingController: LoadingController,
    public modalController: ModalController,
    public eventService: EventService,
  ) {
    console.log(`creating: ${this.constructor.name}`);
  }

  ngOnInit() {
    console.log(`ngOnInit: ${this.constructor.name}`);
  }

  ionViewWillEnter() {
    console.log(`ionViewWillEnter: ${this.constructor.name}`);
  }

  ionViewDidEnter() {
    console.log(`ionViewDidEnter: ${this.constructor.name}`);
    this.doFetchData();
  }

  ionViewWillLeave() {
    console.log(`ionViewWillLeave: ${this.constructor.name}`);
  }

  ionViewDidLeave() {
    console.log(`ionViewDidLeave: ${this.constructor.name}`);
  }

  ngOnDestroy() {
    console.log(`ngOnDestroy: ${this.constructor.name}`);
    this.fetchDataCompleted.unsubscribe();
  }

  private async doFetchData() {
    const loading = await this.loadingController.create({
      spinner: "bubbles",
      translucent: true
    });
    await loading.present();

    this.fetchDataCompleted = this.eventService.fetchDataCompletedEvent$.subscribe(
      (response) => {
        console.log(`fetch data completed: ${JSON.stringify(response)}`);
        this.items = response;
        this.items$ = of(this.items);
        loading.dismiss();
      }
    );

    this.eventService.publishFetchDataStartedEvent();
  }

  public async show(item:Model) {
    console.log(`show: ${JSON.stringify(item)}`);

    const modal = await this.modalController.create({
      component: DetailViewComponent,
      swipeToClose: true,
      componentProps: {
        'order': item
      }
    });
    return await modal.present();
  }

  public delete(item:Model):void {
    console.log(`delete: ${JSON.stringify(item)}`);
    document.getElementById(item.orderid).style.display = 'none';
    this.items.splice(this.items.indexOf(item), 1);
    this.items$ = of(this.items);
  }

}
