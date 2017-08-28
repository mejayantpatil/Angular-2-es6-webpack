
export class CourseModel {
  description;
  title;
  instructor;
  id;
  addedToCart;

  setTitle(title) {
    this.title = title.trim();
  }

  constructor(title, description, id, instructor) {
    this.description = description;
    this.title = title.trim();
    this.id = id;
    this.addedToCart = false;
    this.instructor = instructor;
  }
}
