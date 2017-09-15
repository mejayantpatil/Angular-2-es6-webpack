import { Component, Inject } from '@angular/core';
/*import { CourseStoreService } from '../../services/course-store.service';*/
import template from './checkout.template.html';

@Component({
  selector: 'checkout',
  template: template,
  styleUrls: ['app/components/checkout/checkout.style.css']
})
export class CheckoutComponent { 
  
 fbLogin() {
      FB.login(function(response) {
    if (response.authResponse) {
     console.log('Welcome!  Fetching your information.... ');
     FB.api('/me', function(response) {
       console.log('Good to see you, ' + response.name + '.');
       console.log(response);
     });
    } else {
     console.log('User cancelled login or did not fully authorize.');
    }
    })
  }
}
