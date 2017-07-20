import { Component, Inject } from '@angular/core';
import template from './course-list.template.html';
import { CourseStoreService } from '../../services/course-store.service';

@Component({
  selector: 'course-list',
  template: template,
  styleUrls: ['app/components/course-list/course-list.style.css']
})

export class CourseListComponent {

  constructor(courseStore: CourseStoreService) {
    this._courseStore = courseStore;
    this.courses = this._courseStore.courses;
    this.cart = this._courseStore.cart;
  }
  addToCart(course) {
    this._courseStore.addToCart(course);
  }

  getCount() {
    return this._courseStore.cart.length;
  }
}
