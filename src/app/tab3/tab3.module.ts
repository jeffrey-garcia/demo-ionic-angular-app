import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3PageComponent } from './page/tab3-page.component';
import { Tab3ContainerComponent } from './container/tab3-container.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab3PageComponent }])
  ],
  declarations: [
    Tab3PageComponent,
    Tab3ContainerComponent
  ]
})
export class Tab3PageModule {}
