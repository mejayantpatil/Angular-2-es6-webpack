import { Component, Inject } from '@angular/core';
import { CourseStoreService } from '../../services/course-store.service';
import template from './cart.template.html';

@Component({
  selector: 'cart',
  template: template,
  styleUrls: ['app/components/cart/cart.style.css']
})
export class CartComponent {
  constructor(courseStore: CourseStoreService) {
    this._courseStore = courseStore;
    this.cart = this._courseStore.cart;
  }

  remove(course, event) {
    this._courseStore.remove(course);
  }
}
