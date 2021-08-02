const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let currentOffset = 0;
let startingTime = 0;
const timer = new Timer(durationInput, startButton, pauseButton,
  {
    onStart(timeRemaining)
    {
      startingTime = timeRemaining;
      console.log('started');
    },
    onTick(timeRemaining)
    {
      circle.setAttribute('stroke-dashoffset', ((perimeter * timeRemaining / startingTime) - perimeter));
    },
    onComplete()
    {
      console.log('timer done');
    }
  });
