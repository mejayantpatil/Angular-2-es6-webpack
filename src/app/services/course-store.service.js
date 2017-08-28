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
        image: 'images/turbine1.jpg',
        instructor: 'Steffin Waem'
      },
      {
        id: 2,
        title: 'Course 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        image: 'images/turbine1.jpg',
        instructor: 'Jaffer Maon'
      },
      {
        id: 3,
        title: 'Course 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        image: 'images/turbine1.jpg',
        instructor: 'Amouns Aamson'
      },
      {
        id: 4,
        title: 'Course 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        image: 'images/turbine1.jpg',
        instructor: 'James Calvin'
      },
    ];
    this.courses = coursesData.map((course) => new CourseModel(course.title, course.description, course.id, course.instructor ));
  }

  addToCart(course) {
    //TODO check duplicate here
    course.addedToCart = true;
    this.cart.push(course);
  }

  remove(course) {
    course.addedToCart = false;
    let index = this.cart.indexOf(course);
    this.cart.splice(index, 1);
  }

  getCourse(courseId) {
    return this.courses.filter((course)=> course.id === courseId)[0];
  }

  getCourseByName(courseName) {
    return this.courses.filter((course)=> course.title.includes(courseName));
  }
}
