import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import template from './course-card.template.html';

@Component({
  selector: 'course-card',
  template: template,
  styleUrls: ['app/components/course-card/course-card.style.css']
})

export class CourseCardComponent {
  @Input() course;
  @Output() addToCart = new EventEmitter();
  constructor(){

  }

  add(course, event) {
    event.stopPropagation();
    this.addToCart.next(course);
  }
}
