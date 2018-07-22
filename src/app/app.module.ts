import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {FavoritesPage} from '../pages/favorites/favorites'
import { MyApp } from './app.component';
import {LibraryPage} from '../pages/library/library';
import {QuotesPage} from '../pages/quotes/quotes';
import {QuotePage} from '../pages/quote/quote';
import {SettingsPage} from '../pages/settings/settings';
import {TabsPage} from '../pages/tabs/tabs';
import {QuotesService} from '../services/quotes';
import {SettingsService} from '../services/settings';


@NgModule({
  declarations: [
    MyApp,
    FavoritesPage,
    LibraryPage,
    QuotesPage,
    SettingsPage,
    QuotePage,
    TabsPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  FavoritesPage,
  LibraryPage,
  QuotesPage,
  TabsPage,
  SettingsPage,
  QuotePage
  ],
  providers: [
    StatusBar,
    SettingsService,
    SplashScreen,
    QuotesService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
