import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {}

  onRegister(event: Event) {
    event.preventDefault();

    const username = (document.getElementById('registerUsername') as HTMLInputElement).value;
    const email = (document.getElementById('registerEmail') as HTMLInputElement).value;
    const password = (document.getElementById('registerPassword') as HTMLInputElement).value;
    const confirmPassword = (document.getElementById('confirmPassword') as HTMLInputElement).value;

    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);

    this.navCtrl.navigateForward('/home');
  }

  goToHome() {
    this.navCtrl.navigateRoot('/login');
  }
}

