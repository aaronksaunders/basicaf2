import {Component} from "@angular/core";
import {NavController} from 'ionic-angular';
import {DetailPage} from '../detail/detail';
import {Observable} from 'rxjs/Observable';


import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  textItems: Observable<any[]>;
  authInfo: any

  constructor(private _navController: NavController, public af: AngularFire) {

  }

  ionViewDidEnter() {
    this.af.auth.getAuth() && (this.textItems = this.af.database.list('/textItems'))
  }

  ngOnInit() {
    try {
      this.af.auth.subscribe((data) => {
        console.log("in auth subscribe", data)

        if (data) {

          this.authInfo = data.auth.providerData[0]
          alert("logged in")

        } else {
          alert("not logged in")

        }
      })

    } catch (EE) {
      alert(EE)
    }
  }
  pushPage(buttonColor: string) {
    this._navController.push(DetailPage, { color: buttonColor });
  }
}
