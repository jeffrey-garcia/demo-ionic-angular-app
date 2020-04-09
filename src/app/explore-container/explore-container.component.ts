import { Component, OnInit, Input } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { Model } from '../model/model';
import { DetailViewComponent } from './modal-container/detail-view.component'

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;

  public items:Model[] = [];

  constructor(
    public loadingController: LoadingController,
    public modalController: ModalController,
  ) { 
    console.log(`creating: ${this.constructor.name}`);
  }

  // public myHeaderFn(record, recordIndex, records):string {
  //   if (recordIndex % 20 === 0) {
  //     return 'Header ' + recordIndex;
  //   }
  //   return null;
  // }

  ngOnInit() {
    console.log(`ngOnInit: ${this.constructor.name}`);
    this.generateStubData();
  }

  ngOnDestroy() {
    console.log(`ngOnDestroy: ${this.constructor.name}`)
  }

  private async generateStubData() {
    console.log(`generateStubData - start`);
    
    const loading = await this.loadingController.create({
      spinner: "bubbles",
      translucent: true
    });
    await loading.present();

    for (let i = 0; i < 10; i++) {
      this.items.push({
        orderid: `${i}`,
        clientname: `customer-${i}`,
        status: `pending`
      });
    }

    loading.dismiss();
    console.log(`generateStubData - finish`);
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
  }
}







