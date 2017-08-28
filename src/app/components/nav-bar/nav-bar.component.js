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
    this.searchToggle = false;
    this.searchResult = [];
  }

  getCount() {
    return this._courseStore.cart.length;
  }
  toggleMobileSearch() {
    this.mobileSearch = !this.mobileSearch;
  }

  toggleSearchList() {
    this.searchToggle = !this.searchToggle;
  }

  searchItem(val) {
    if(val != '') {
      this.searchToggle = true;
    } else {
      this.toggleSearchList();
    }

    this.searchResult = this._courseStore.getCourseByName(val);
  }
}
