import { Component, Inject } from '@angular/core';
import template from './nav-bar.template.html';
import { CourseStoreService } from '../../services/course-store.service';

@Component({
  selector: 'nav-bar',
  template: template,
  styleUrls: ['app/components/nav-bar/nav-bar.style.css']
})

export class NavBarComponent {

  constructor(courseStore: CourseStoreService) {
    this.appName = 'TurbineTut';
    this._courseStore = courseStore;
    this.mobileSearch = false;
  }

  getCount() {
    return this._courseStore.cart.length;
  }
  toggleMobileSearch() {
    this.mobileSearch = !this.mobileSearch;
  }
}
