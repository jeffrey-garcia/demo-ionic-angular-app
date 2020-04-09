import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestService } from './service/rest-service.service';
import { EventService } from './service/event-service.service';

// import swagger generated code module
import { ApiModule as SwaggerApiModule, BASE_PATH as SwaggerBasePath } from './swagger';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    SwaggerApiModule 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: SwaggerBasePath, useValue: environment.SWAGGER_API_BASE_PATH},
    RestService,
    EventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    console.log(`creating: ${this.constructor.name}`);
  }
}
