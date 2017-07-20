
export class CourseModel {
  description;
  title;
  id;

  setTitle(title) {
    this.title = title.trim();
  }

  constructor(title, description, id) {
    this.description = description;
    this.title = title.trim();
    this.id = id;
  }
}
