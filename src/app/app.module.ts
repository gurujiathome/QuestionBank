import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';

import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {ScreenOrientation} from "@ionic-native/screen-orientation";
import {SQLite} from "@ionic-native/sqlite";
import {IonicStorageModule} from "@ionic/storage";

import {MyApp} from './app.component';

import {UserDataProvider} from '../providers/user-data/user-data';

// ionic pro monitoring
import {Pro} from '@ionic/pro';

const IonicPro = Pro.init('d6a25364', {
  appVersion: "0.0.1"
});

export class MyErrorHandler implements ErrorHandler {
  handleError(err: any): void {
    IonicPro.monitoring.handleNewError(err);
  }
}

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      preloadModules: true,
      backButtonText: ''
    }),
    IonicStorageModule.forRoot({
      name: 'myApp',
      driverOrder: ['sqlite', 'indexeddb', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ScreenOrientation,
    SQLite,
    UserDataProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: ErrorHandler, useClass: MyErrorHandler},
    UserDataProvider,
  ]
})

export class AppModule {

}
