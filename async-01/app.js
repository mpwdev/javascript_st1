const button = document.querySelector('button');
const output = document.querySelector('p');

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, duration);
  });
  return promise;
};

function trackUserHandler() {
  // console.log('Clicked!');
  navigator.geolocation.getCurrentPosition(
    (posData) => {
      // setTimeout(() => {
      //   console.log(posData);
      // }, 2000);
      setTimer(2000).then((data) => {
        console.log(data, posData);
      });
    },
    (errData) => {
      console.log(errData);
    }
  );

  // setTimeout(() => {
  //   console.log('Timer done! /zero timout/');
  // }, 0);
  setTimer(1000).then(() => {
    console.log('Timer done! /timeout 1000/');
  });

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
