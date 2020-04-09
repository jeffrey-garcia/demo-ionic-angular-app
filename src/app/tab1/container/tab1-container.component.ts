import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Model } from 'src/app/model/model';
import { EventService } from 'src/app/service/event-service.service';

@Component({
  selector: 'app-tab1-container',
  templateUrl: './tab1-container.component.html',
  styleUrls: ['./tab1-container.component.scss'],
})
export class Tab1ContainerComponent implements OnInit {
  public items:Model[] = [];

  private fetchDataStarted:Subscription;

  constructor(
    public eventService: EventService
  ) {
    console.log(`creating: ${this.constructor.name}`);
  }

  ngOnInit() {
    console.log(`ngOnInit: ${this.constructor.name}`);
    this.fetchDataStarted = this.eventService.fetchDataStartedEvent$.subscribe(
      (response) => {
        console.log(`fetch data triggered:`);
        this.generateStubData();
      }
    );    
  }
  
  ngOnDestroy() {
    console.log(`ngOnDestroy: ${this.constructor.name}`);
    this.fetchDataStarted.unsubscribe();
  }

  private async generateStubData() {
    console.log(`generateStubData - start`);
    
    for (let i = 0; i < 10; i++) {
      this.items.push({
        orderid: `${i}`,
        clientname: `customer-${i}`,
        status: `pending`
      });
    }

    console.log(`generateStubData - finish`);
    this.eventService.publishFetchDataCompletedEvent(this.items);
  }
}
