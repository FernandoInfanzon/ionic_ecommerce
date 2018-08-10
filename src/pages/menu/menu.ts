import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class Menu {
  
  homePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.homePage = HomePage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
