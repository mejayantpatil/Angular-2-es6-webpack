import { TestBed, inject } from '@angular/core/testing';
import { CourseStoreService } from './course-store.service';

describe('Course Store Service', function() {
  let store;

  beforeEach(()=> {
    TestBed.configureTestingModule({
      providers: [CourseStoreService]
    });
  });

  beforeEach(inject([CourseStoreService], (storage)=>{
    store = storage;
  }));

  it('should have default courses', function() {
    expect(store.courses.length).toBe(4);
  });

  it('should have empty cart', function() {
      expect(store.cart.length).toBe(0);
  });

  it('should add courser to card', function() {
    store.addToCart({title: 'test'});
    expect(store.cart.length).toBe(1);
  });

  it('should get course for given id', function() {
    expect(store.getCourse(1)).toBe(store.courses[0]);
  });
});
