import { NavController } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.page.html',
  styleUrls: ['./planner.page.scss'],
})
export class PlannerPage {

  constructor(private navCtrl: NavController) {}

  goToHome() {
    this.navCtrl.back();
  }
}

