import { Injectable } from '@angular/core';
import { CourseModel } from '../models/course.model';

@Injectable()
export class CourseStoreService {
  courses = [];
  cart = [];

  constructor() {
    let coursesData = [
      {
        id: 1,
        title: 'Course 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        image: 'images/turbine1.jpg'
      },
      {
        id: 2,
        title: 'Course 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        image: 'images/turbine1.jpg'
      },
      {
        id: 3,
        title: 'Course 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        image: 'images/turbine1.jpg'
      },
      {
        id: 4,
        title: 'Course 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        image: 'images/turbine1.jpg'
      },
    ];
    this.courses = coursesData.map((course) => new CourseModel(course.title, course.description, course.id));
  }

  addToCart(course) {
    //TODO check duplicate here
    this.cart.push(course);
  }

  getCourse(courseId) {
    return this.courses.filter((course)=> course.id === courseId)[0];
  }
}
