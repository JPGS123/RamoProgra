import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { MatListModule } from '@angular/material/list';
import { HomePageRoutingModule } from './home-routing.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MatListModule,
    MatProgressBarModule,
    
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
