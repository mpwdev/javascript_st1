const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition = (options) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        resolve(success);
      },
      (error) => {
        reject(error);
      },
      options
    );
  });
  return promise;
};

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, duration);
  });
  return promise;
};

async function trackUserHandler() {
  // console.log('Clicked!');
  // navigator.geolocation.getCurrentPosition(
  //   (posData) => {
  //     // setTimeout(() => {
  //     //   console.log(posData);
  //     // }, 2000);
  //     setTimer(2000).then((data) => {
  //       console.log(data, posData);
  //     });
  //   },
  //   (errData) => {
  //     console.log(errData);
  //   }
  // );
  // let positionData;
  let positionData;
  let timerData;
  try {
    positionData = await getPosition();
    timerData = await setTimer(2000);
  } catch (error) {
    console.log(error);
  }
  // const positionData = await getPosition();
  // const timerData = await setTimer(2000);
  console.log(timerData, positionData);
  // .then((posData) => {
  //   positionData = posData;
  //   return setTimer(2000);
  // })
  // .catch((err) => {
  //   // console.log(`error is: ${err}`);
  //   console.log(err);
  //   return 'getpositions failed, going to next step...';
  // })
  // .then((data) => {
  //   console.log(data, positionData);
  // });
  // .finally(() => {
  //   // the promise is settled now - finally() will NOT return a new promise!
  //   // you can do final cleanup work here
  //   console.log(
  //     '--- promise is settled now - final mode: SETTLED - final cleanup ---'
  //   );
  // });

  // setTimeout(() => {
  //   console.log('Timer done! /zero timout/');
  // }, 0);
  // setTimer(1000).then(() => {
  //   console.log('Timer done! /timeout 1000/');
  // });

  // console.log('Getting position.../out of navigator/');
}

button.addEventListener('click', trackUserHandler);

// ----

// let result = 0;

// for (let i = 0; i < 100000000; i++) {
//   // result = result + i;
//   result += i;
// }

// console.log(result);
