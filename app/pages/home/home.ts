import {Component, NgZone} from "@angular/core";
import {NavController} from 'ionic-angular';
import {DetailPage} from '../detail/detail';
import {Observable} from 'rxjs/Observable';
import {Facebook} from 'ionic-native'


import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

declare var firebase: any


@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  textItems: Observable<any[]>;
  authInfo: any
  state = { showLoginInfo: true }
  error = {}

  constructor(private _navController: NavController, public af: AngularFire, public zone: NgZone) {

  }

  ionViewDidEnter() {
    this.loadData()
  }

  ngOnInit() {

    this.af.auth.subscribe((data) => {
      console.log("in auth subscribe", data)

      if (data) {
        this.authInfo = data.auth.providerData[0]
        alert("logged in")
        this.state.showLoginInfo = false

        this.loadData();

      } else {
        console.log("not logged in")
        this.state.showLoginInfo = true
      }
    });
  }

  loadData() {
    this.authInfo && (this.textItems = this.af.database.list('/stuff'))
  }
  logoutClicked() {
    if (this.authInfo) {
      this.af.auth.logout();
      this.authInfo = null
    }
  }


  loginClicked(credentials) {
    this.af.auth.login(credentials, {
      provider: AuthProviders.Password,
      method: AuthMethods.Password
    }).then((authData) => {
      console.log(authData)
    }).catch((error) => {
      this.error = error
      console.log(error)
    });
  }

  loginFacebook() {

    var facebookConfig = {
      method: AuthMethods.OAuthToken,
      provider: AuthProviders.Facebook
    }

    Facebook.login(['email'])
      .then((_response) => {
        console.log(_response)
        var creds = firebase.auth.FacebookAuthProvider.credential(_response.authResponse.accessToken)
        return this.af.auth.login(creds, facebookConfig)
      }).then((authData) => {
        console.log(authData)
      }).catch((error) => {
        this.error = { message: error }
        console.log(error)
      });
  }

  pushPage(buttonColor: string) {
    this._navController.push(DetailPage, { color: buttonColor });
  }
}
