const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

const userId = 'u123';
const user = {
  name: 'Bob',
  age: '33',
  hobbies: ['Programming', 'Sports'],
};

storeBtn.addEventListener('click', () => {
  localStorage.setItem('uid', userId);
  localStorage.setItem('user', JSON.stringify(user));
});

retrBtn.addEventListener('click', () => {
  const extractedId = localStorage.getItem('uid');
  const extractedUser = JSON.parse(localStorage.getItem('user'));
  console.log(extractedUser);
  if (extractedId) {
    console.log('Got the id from localStorage - ' + extractedId);
  } else {
    console.log('Could not find id in localStorage');
  }
});
