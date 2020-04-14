import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { LoadingController, ModalController } from '@ionic/angular';

import { Tab1DetailPageComponent } from './tab1-detail-page.component';
import { Model } from '../../model/model';
import { EventService } from '../../service/event-service.service';
import { RestService } from 'src/app/service/rest-service.service';

@Component({
  selector: 'app-tab1-page',
  templateUrl: './tab1-page.component.html',
  styleUrls: ['./tab1-page.component.scss'],
})
export class Tab1PageComponent implements OnInit {
  public title:string = "View";

  private items:Model[] = [];
  public items$:Observable<Model[]> = of(this.items);
  
  constructor(
    public loadingController: LoadingController,
    public modalController: ModalController,
    public eventService: EventService,
    public restService: RestService
  ) {
    console.log(`creating: ${this.constructor.name}`);
  }

  ngOnInit() {
    console.log(`ngOnInit: ${this.constructor.name}`);
  }

  ionViewWillEnter() {
    console.log(`ionViewWillEnter: ${this.constructor.name}`);

    // refresh the page whenever entering
    this.doFetchData(); 
  }

  ionViewDidEnter() {
    console.log(`ionViewDidEnter: ${this.constructor.name}`);
  }

  ionViewWillLeave() {
    console.log(`ionViewWillLeave: ${this.constructor.name}`);
  }

  ionViewDidLeave() {
    console.log(`ionViewDidLeave: ${this.constructor.name}`);
  }

  ngOnDestroy() {
    console.log(`ngOnDestroy: ${this.constructor.name}`);
  }

  private async doFetchData():Promise<void> {
    const loading = await this.loadingController.create({
      spinner: "bubbles",
      translucent: true
    });
    await loading.present();

    this.restService.fetchData().subscribe(
      (response) => {
        this.items = response;
        this.items$ = of(this.items.reverse());
        loading.dismiss();
      }
    );
  }

  public async show(item:Model):Promise<void> {
    console.log(`show: ${JSON.stringify(item)}`);

    const modal = await this.modalController.create({
      component: Tab1DetailPageComponent,
      swipeToClose: true,
      componentProps: {
        'order': item
      }
    });
    return await modal.present();
  }

  public async delete(item:Model):Promise<void> {
    console.log(`delete: ${JSON.stringify(item)}`);

    const loading = await this.loadingController.create({
      spinner: "bubbles",
      translucent: true
    });
    await loading.present();

    this.restService.deleteData(item).subscribe(
      (response) => {
        this.items = response;
        this.items$ = of(this.items.reverse());
        loading.dismiss();
      }
    );
  }

  public async search(event):Promise<void> {
    console.log(`search: ${event.target.value}`);

    let input = event.target.value;
    if (input && input.trim() != '') {
      this.restService.searchData(input).subscribe(
        (response) => {
          if (response != null) {
            console.log(`response: ${JSON.stringify(response)}`);
            this.items$ = of([response]);
          } else {
            this.items$ = of([]);
          }
        }
      );

    } else {
      this.items$ = of(this.items);
    }
  }

  public cancelSearch(event):void {
    console.log(`cancelSearch: ${event.target.value}`);
    this.items$ = of(this.items);
  }
}
