# basicaf2
test application for issues with angularFire 2

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

![https://github.com/aaronksaunders/basicaf2/blob/master/Screenshot%202016-06-18%2021.54.12.png](https://github.com/aaronksaunders/basicaf2/blob/master/Screenshot%202016-06-18%2021.54.12.png)
