import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { Tab1Page } from './tab1.page';
import { Tab1PageComponent } from './page/tab1-page.component';
import { Tab1ContainerComponent } from './container/tab1-container.component';
import { DetailViewComponent } from '../explore-container/modal-container/detail-view.component';
// import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    // ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab1PageComponent }])
  ],
  declarations: [
    // Tab1Page,
    Tab1PageComponent,
    Tab1ContainerComponent
  ],
  entryComponents: [
    DetailViewComponent
  ]  
})
export class Tab1PageModule {
  constructor() {
    console.log(`creating: ${this.constructor.name}`);
  }
}
