import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { HttpTestService } from '../../services/http-test.service';
import template from './checkout.template.html';
import { FacebookService, InitParams, LoginResponse  } from 'ngx-facebook';


@Component({
  selector: 'checkout',
  template: template,
  styleUrls: ['app/components/checkout/checkout.style.css']
})
export class CheckoutComponent {  

constructor(http: HttpTestService, fb: FacebookService ) {
	this.service = http;
	let initParams: InitParams = {
      appId: '666279730144440',
      xfbml: true,
      version: 'v2.8'
    };
    this.fb = fb;
	this.fb.init(initParams);
}

 fbLogin() {
	/**
	*	This is implemented by refring 
	*	URL https://www.npmjs.com/package/ng2-facebook-sdk
	**/
    this.fb.login()
      .then((response: LoginResponse) => {
		  this.fb.api('/me').then((res)=> {
			this.service.setUser(res.name);
		  }); 
	  })
      .catch((error: any) => console.error(error));
 
	/***
	var that = this;
	FB.login(function(response){
      if(response.status === 'connected'){
		alert('you are connected');
		that.getInfo();	
      } else if(response.status === 'not_authorized') {
        alert('you are not authorized');
      } else {
        alert('you are not logged into facebook');
      }
    });      
	***/
  }

 fbLogout() {
	this.fb.logout().then((res) => {
		this.service.setUser(this.user);
	});
 }

 getUser() {
	  return this.service.user;
  }
}
