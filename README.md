# basicaf2
test application for issues with angularFire 2

```console
git clone https://github.com/aaronksaunders/basicaf2
cd basicaf2
npm install
```

This code will work fine and authenticate a user and recognize the authentication event in the browser...
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

but on device you see this error...

![https://github.com/aaronksaunders/basicaf2/blob/master/Screenshot%202016-06-18%2021.54.12.png](https://raw.githubusercontent.com/aaronksaunders/basicaf2/master/Screenshot%202016-06-18%2021.54.12.png)

#### Include the proper typings for firebase
was getting alot of errors... Add the following to the `main.d.ts` file 

```
/// <reference path="../node_modules/angularfire2/firebase3.d.ts" />
```