import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';

import {
    FIREBASE_PROVIDERS, defaultFirebase,
    AngularFire, firebaseAuthConfig, AuthProviders,
    AuthMethods
} from 'angularfire2';

@Component({
    template: '<ion-nav [root]="rootPage"></ion-nav>',
    providers: [
        FIREBASE_PROVIDERS,
        // Initialize Firebase app  
        defaultFirebase({
            apiKey: "AIzaSyBb0yc3UWwQPy_dvkcRLThNfQZuNx9jZ-g",
            authDomain: "fir-starterapp.firebaseapp.com",
            databaseURL: "https://fir-starterapp.firebaseio.com",
            storageBucket: "fir-starterapp.appspot.com",
        }),
        firebaseAuthConfig({
            provider: AuthProviders.Password,
            method: AuthMethods.Password,
            remember: 'default',
            scope: ['email']
        })
    ]
})
export class MyApp {
    rootPage: any = HomePage;

    constructor(platform: Platform) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
        });
    }
}

ionicBootstrap(MyApp);
