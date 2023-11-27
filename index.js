setInterval(SetClock, 1000);

const hourHand = document.querySelector('.hour');
const minutesHand = document.querySelector('.minutes');
const secondHand = document.querySelector('.second');


function SetClock() {
  const currentDate = new Date()
  const secondRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondRatio + currentDate.getMinutes()) / 60
  const hourRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(secondHand, secondRatio)
  setRotation(minutesHand, minutesRatio)
  setRotation(hourHand, hourRatio)
}


function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}
SetClock();

// let set_clock = setInterval(() => {
//     let date_now = new Date();
//     let hr = date_now.getHours();
//     let min = date_now.getMinutes();
//     let sec = date_now.getSeconds();
//     let calc_hr = (hr * 30) + (min / 2);
//     let calc_min = (min * 6) + (sec / 10);
//     let calc_sec = sec * 6;
//     hourHand.style.transform = `rotate(${calc_hr}deg)`;
//     minutesHand.style.transform = `rotate(${calc_min}deg)`;
//     secondHand.style.transform = `rotate(${calc_sec}deg)`;
// }, 1000);