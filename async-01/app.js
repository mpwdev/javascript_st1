const button = document.querySelector('button');
const output = document.querySelector('p');

function trackUserHandler() {
  // console.log('Clicked!');
  navigator.geolocation.getCurrentPosition(
    (posData) => {
      setTimeout(() => {
        console.log(posData);
      }, 2000);
    },
    (errData) => {
      console.log(errData);
    }
  );

  setTimeout(() => {
    console.log('Timer done! /zero timout/');
  }, 0);

  console.log('Getting position.../out of navigator/');
}

button.addEventListener('click', trackUserHandler);

// ----

// let result = 0;

// for (let i = 0; i < 100000000; i++) {
//   // result = result + i;
//   result += i;
// }

// console.log(result);
