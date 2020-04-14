import { Component, OnInit } from '@angular/core';

import { LoadingController } from '@ionic/angular';

import { Model } from 'src/app/model/model';
import { RestService } from 'src/app/service/rest-service.service';
import { promise } from 'protractor';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-tab2-page',
  templateUrl: './tab2-page.component.html',
  styleUrls: ['./tab2-page.component.scss'],
})
export class Tab2PageComponent implements OnInit {

  public title:string = "Add/Modify";

  public item:Model = {
    product: '',
    clientname: '',
    clientphone: '',
    ordersize: '',
    amount: ''
  };

  public messageSubtitle:string = "Fill up the necessary fields and click save";

  public messageTitle:string = "";

  constructor(
    public restService: RestService,
    public loadingController: LoadingController,
  ) {
    console.log(`creating: ${this.constructor.name}`);
  }

  ngOnInit() {
    console.log(`ngOnInit: ${this.constructor.name}`);
  }

  ngOnDestroy() {
    console.log(`ngOnDestroy: ${this.constructor.name}`);
  }

  public async save():Promise<void> {
    if (this.item.clientname!=null && this.item.clientname!="" 
    ) {
      console.log(`save: ${JSON.stringify(this.item)}`);

      const loading = await this.loadingController.create({
        spinner: "bubbles",
        translucent: true
      });
      await loading.present();

      // this.restService.createDataStub(this.item).subscribe(
      //   (response) => {
      //     console.log(`response: ${JSON.stringify(response)}`);
      //     this.item = {
      //       orderid: null,
      //       clientname: null,
      //       status: null
      //     };
      //     loading.dismiss();
      //   }
      // );

      this.restService.createData(this.item).subscribe(
        (response) => {
          console.log(`response: ${JSON.stringify(response)}`);

          this.item = {
            product: '',
            clientname: '',
            clientphone: '',
            ordersize: '',
            amount: '',
          }
          loading.dismiss();          
        }
      )
    } else {
      console.log(`mandatory input required`);
    }
  }

}
