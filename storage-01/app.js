const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

const userId = 'u123';
const user = {
  name: 'Bob',
  age: '33',
  hobbies: ['Programming', 'Sports'],
};

// sessionStorage (data) cleared after browser restart
storeBtn.addEventListener('click', () => {
  sessionStorage.setItem('uid', userId);
  localStorage.setItem('user', JSON.stringify(user));
});

retrBtn.addEventListener('click', () => {
  const extractedId = sessionStorage.getItem('uid');
  const extractedUser = JSON.parse(localStorage.getItem('user'));
  console.log(extractedUser);
  if (extractedId) {
    console.log('Got the id from sessionStorage - ' + extractedId);
  } else {
    console.log('Could not find id in sessionStorage');
  }
});
