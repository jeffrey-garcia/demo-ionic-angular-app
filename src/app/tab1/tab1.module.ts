import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1PageComponent } from './page/tab1-page.component';
import { Tab1ContainerComponent } from './container/tab1-container.component';
import { Tab1DetailPageComponent } from './page/tab1-detail-page.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1PageComponent }])
  ],
  declarations: [
    Tab1PageComponent,
    Tab1ContainerComponent,
    Tab1DetailPageComponent
  ],
  entryComponents: [
    Tab1DetailPageComponent
  ]  
})
export class Tab1PageModule {
  constructor() {
    console.log(`creating: ${this.constructor.name}`);
  }
}
