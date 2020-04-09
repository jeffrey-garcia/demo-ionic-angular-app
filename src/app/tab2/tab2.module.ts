import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2PageComponent } from './page/tab2-page.component';
import { Tab2ContainerComponent } from './container/tab2-container.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab2PageComponent }])
  ],
  declarations: [
    Tab2PageComponent,
    Tab2ContainerComponent
  ]
})
export class Tab2PageModule {}
