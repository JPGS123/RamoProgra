import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor(private navCtrl: NavController, private router: Router) {}

  onSubmit(event: Event) {
    event.preventDefault();

    const email = (document.getElementById('exampleInputEmail1') as HTMLInputElement).value;
    const password = (document.getElementById('exampleInputPassword1') as HTMLInputElement).value;
    const rememberMe = (document.getElementById('exampleCheck1') as HTMLInputElement).checked;

    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);

    this.navCtrl.navigateForward('/home');
  }

  goToRegister() {
    this.router.navigate(['/registro']);
}
}
