# basicaf2
Test application for Issues with angularFire 2 - at this point all issues have been resolved when using version `2.0.0-beta.3-0930330` of AngularFire2

This sample demonstrates Facebook Login in Ionic2 on Device and email authentication using AngularFire2

```console
git clone https://github.com/aaronksaunders/basicaf2
cd basicaf2
npm install
```

This code will work fine and authenticate a user and recognize the authentication event
```javascript
  ngOnInit() {
    this.af.auth.subscribe((data) => {
      console.log("in auth subscribe", data)
      if (data) {
        this.authInfo = data.auth.providerData[0]
        alert("logged in")
      } else {
        alert("not logged in")
      }
    })
  }
```  

Be sure to install the Facebook Plugin
```
$ cordova plugin add cordova-plugin-facebook4 --save --variable APP_ID="123456789" --variable APP_NAME="myApp"
```

The inAppbrowser Plugin
```
$ cordova plugin add --save cordova-plugin-inappbrowser
```

Configure your Facebook App Correctly

[http://ionicframework.com/docs/v2/native/facebook/](http://ionicframework.com/docs/v2/native/facebook/)

Enable Facebook Auth in Firebase Console [https://console.firebase.google.com/](https://console.firebase.google.com/) under the authentication tab

