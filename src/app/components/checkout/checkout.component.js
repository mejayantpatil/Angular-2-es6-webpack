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
    FB.login(function(response){
      if(response.status === 'connected'){
        alert('you are connected');
      } else if(response.status === 'not_authorized') {
        alert('you are not authorized');
      } else {
        alert('you are not logged into facebook');
      }
    });      
  }
}
