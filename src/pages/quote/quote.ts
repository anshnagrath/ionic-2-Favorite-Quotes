import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Quote} from '../../data/quote.interface';
import {ViewController} from 'ionic-angular';
import {ModalController} from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
  person:string;
  text:string;

  constructor(public navCtrl: NavController, private viewCtrl:ViewController,public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotePage');
  this.person= this.navParams.get('person');
    this.text = this.navParams.get('text');

  }
  onClose(remove = false){
    this.viewCtrl.dismiss(remove);

  }

}
