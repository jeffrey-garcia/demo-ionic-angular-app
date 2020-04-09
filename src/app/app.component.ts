import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { EventService } from './service/event-service.service';
import { Subscription } from 'rxjs';
import { RestService } from './service/rest-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-ui-app';

  private loginSubscription: Subscription;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private restService: RestService,
    private eventService: EventService
  ) {
    console.log(`creating: ${this.constructor.name}`);
  }

  ngOnInit() {
    console.log(`ngOnInit: ${this.constructor.name}`);
    this.initializeApp();
  }

  initializeApp():void {
    console.log(`initializeApp: ${this.constructor.name}`);
    this.platform.ready().then(() => {
      console.log(`platform ready: ${this.constructor.name}`);
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.loginSubscription = this.eventService.loginCompletedEvent$.subscribe(
        (data) => {
          // page transition here
        }
      );

      // this.doLogin();
    });
  }

  doLogin():void {
      console.log(`doLogin`);
      // stub
      this.restService.loginStub().subscribe(
        (response) => {
          console.log(`login completed: ${JSON.stringify(response)}`);
          this.eventService.publishLoginCompletedEvent();
        }
      )
  }

  ngOnDestroy() {
    console.log(`ngOnDestroy: ${this.constructor.name}`);
    this.loginSubscription.unsubscribe();
  }
}
