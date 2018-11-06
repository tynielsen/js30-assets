const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


function setDate() {
  const now = new Date();
  console.log(now);

  const seconds = now.getSeconds();
  const secondsDegree = ((seconds / 60) * 360) + 90;

  const minutes = now.getMinutes();
  const minutesDegree = ((minutes / 60) * 360) + 90;

  const hours = now.getHours();
  const hoursDegree = ((hours / 12) * 360) + 90;
  
  secondHand.style.transform = `rotate(${secondsDegree}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegree}deg)`;
  hourHand.style.transform = `rotate(${hoursDegree}deg)`;
}

setInterval(setDate, 1000);
