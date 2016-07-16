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
