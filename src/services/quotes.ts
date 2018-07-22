import {Quote} from '../data/quote.interface';
export class QuotesService{
  private favoriteQuotes:Quote[] = [];
  addQuoteToFavorites(quote:Quote){
    this.favoriteQuotes.push(quote);
  }
  removeQuoteFromFavorites(quote:Quote){
 const position = this.favoriteQuotes.findIndex((quoteEl:Quote)=>{
   return quoteEl.id == quote.id;
 })
    this.favoriteQuotes.splice(position,1);

  }
  getFavoriteQuotes(){
    return this.favoriteQuotes.slice();
  }
  isFavoriteQuotes(quote:Quote){
  const isfavour= this.favoriteQuotes.find(o=>o.id ==quote.id)
  if(isfavour) return true;
  else return false;
  }
}
