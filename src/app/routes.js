import { CourseListComponent } from './components/course-list/course-list.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';

export let routes = [
  { path: '', component: CourseListComponent, pathMatch: 'full' },
  { path: 'cart', component: CartComponent },
  { path: 'course-details/:title', component: CourseDetailsComponent },
  { path: 'checkout', component:  CheckoutComponent }
];
