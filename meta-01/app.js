const course = {
  title: 'JavaScript',
};

// Reflect API - new
// Object. API? - older

Reflect.setPrototypeOf(course, {
  toString() {
    return this.title;
  },
});

console.log(course.toString());
