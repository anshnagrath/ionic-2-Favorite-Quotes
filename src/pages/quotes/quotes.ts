import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController} from 'ionic-angular';
import {Quote} from '../../data/quote.interface';
import {QuotesService} from '../../services/quotes';
import {TabsPage} from '../tabs/tabs';
@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
    quotesGroup:{category:string,quotes:Quote[],icon:string};

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertController:AlertController,private quotesService:QuotesService) {
  }

  ngOnInit() {
        this.quotesGroup = this.navParams.data;
      console.log(this.quotesGroup,'look')
  }
 onAddToFavorites(selectedQuote:Quote){
const alert = this.alertController.create({
  title: "Add Quote",
  subTitle:'Are you sure?',
  message:'Are you sure you want to add the quote?',
  buttons:[{
    text:'Yes,go ahead',
    handler:()=>{
    this.quotesService.addQuoteToFavorites(selectedQuote);
    this.navCtrl.push(TabsPage);
     console.log('ok')
   }},{
     text:'No i changed my mind!',
     role:'cancel',
     handler:()=>{
       console.log('cancel clicked')
     }
   }]
});
alert.present();
}
onAddToUnFavorite(quote:Quote){
  this.quotesService.removeQuoteFromFavorites(quote);
  this.navCtrl.push(TabsPage);
}
isFavoriteQuote(quote){
return this.quotesService.isFavoriteQuotes(quote);
}
}
