const course = {
  title: 'JavaScript Title here',
};

const courseHandler = {
  get(obj, propertyName) {
    console.log(propertyName);
    // return obj[propertyName];
    if (propertyName === 'length') {
      return 'AoA';
    }
    return obj[propertyName] || 'NOT FOUND';
  },
};

const pCourse = new Proxy(course, courseHandler);
console.log(pCourse.title, pCourse.length, pCourse.rating);
// console.log(course, pCourse);
