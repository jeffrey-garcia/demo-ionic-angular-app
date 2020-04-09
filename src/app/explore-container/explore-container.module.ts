import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponent } from './explore-container.component';
import { DetailViewComponent } from './modal-container/detail-view.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [
    ExploreContainerComponent,
    DetailViewComponent,
  ],
  exports: [
    ExploreContainerComponent,
    DetailViewComponent,
  ],
  entryComponents: [
    DetailViewComponent,
  ]
})
export class ExploreContainerComponentModule {
  constructor() {
    console.log(`creating: ${this.constructor.name}`);
  }
}
