import { Component, Inject } from '@angular/core';
import { ActivatedRoute, RouteParams } from '@angular/router';
import template from './course-details.template.html';
import { CourseStoreService } from '../../services/course-store.service';

@Component({
  selector: 'course-details',
  template: template
})

export class CourseDetailsComponent {
  constructor(route: ActivatedRoute, courseStore: CourseStoreService) {
    this.title = route.params._value['title'];
    this._courseStore = courseStore;
    this.course = this._courseStore.getCourse(parseInt(this.title, 10));
  }

  add(course, event) {
    this._courseStore.addToCart(course);
  }

}
