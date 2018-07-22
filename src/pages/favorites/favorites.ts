import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {QuotesService} from '../../services/quotes';
import{Quote} from '../../data/quote.interface';
import {ModalController} from 'ionic-angular';
import {SettingsService} from '../../services/settings';
import {QuotePage} from '../quote/quote'
@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  private quote:Quote[];
  constructor(public navCtrl: NavController,private modalCtrl:ModalController,public settingsService:SettingsService ,  public navParams: NavParams,private quotesService:QuotesService) {
  }

ionViewWillEnter() {
this.quote = this.quotesService.getFavoriteQuotes();
console.log(this.quote,'seee')
  }
onViewQuote(quote:Quote){
  console.log('clicked')
  const modal = this.modalCtrl.create(QuotePage,quote);
  modal.present();
  modal.onDidDismiss((remove:boolean)=>{
    console.log(remove)
    if(remove){
      this.quotesService.removeQuoteFromFavorites(quote);
    this.quote= this.quotesService.getFavoriteQuotes();
    }
  })
}
onRemoveFromFavroites(quote:Quote){
  this.quotesService.removeQuoteFromFavorites(quote);
  this.quote = this.quotesService.getFavoriteQuotes();
}
getbackground(){
  return this.settingsService.isAltBackground()?'col1':'white';
}
}
