import { Component, Inject } from '@angular/core';

import template from './app.template.html';

@Component({
  selector: 'todo-app',
  template: template,
  styles: ['footer p { color : #000; text-align: center; }']
})
export class AppComponent {
  constructor(@Inject('AUTHOR') author) {
    this.author = author;
  }
}
