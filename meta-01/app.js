const course = {
  title: 'JavaScript Title here',
};

// get and set are Traps in example below
const courseHandler = {
  get(obj, propertyName) {
    console.log(propertyName);
    // return obj[propertyName];
    if (propertyName === 'length') {
      return 'AoA';
    }
    return obj[propertyName] || 'NOT FOUND';
  },
  set(obj, propertyName, newValue) {
    console.log('Sending alert to log server ....');
    if (propertyName === 'rating') {
      // block access to set
      return;
    }
    obj[propertyName] = newValue;
  },
};

const pCourse = new Proxy(course, courseHandler);
pCourse.rating = 5;
console.log(pCourse.title, pCourse.length, pCourse.rating);
// console.log(course, pCourse);
