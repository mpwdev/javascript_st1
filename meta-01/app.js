// library land
const uid = Symbol('uids');
console.log(uid);

const user = {
  // id: 'p1',
  [uid]: 'p1',
  name: 'Bob',
  age: 30,
};

// app land => using the library above

user.id = 'p2'; // this should not be possible

console.log(user);
console.log(user[uid]);
