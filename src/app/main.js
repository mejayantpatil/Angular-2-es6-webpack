import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { MainModule } from './main.module';

platformBrowserDynamic().bootstrapModule(MainModule);
/**
window.fbAsyncInit = function() {
    FB.init({
      appId      : '666279730144440',
      cookie     : true,
      xfbml      : true,
      version    : 'v2.10'
    });
    FB.AppEvents.logPageView();       
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
**/