'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;


  if (document.getElementById('days')) {
    let countDown = new Date('Nov 30, 2019 00:00:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;
  
      document.getElementById('days').innerText = Math.floor(distance / (day)),
      document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
      document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
      document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
  
    }, second)  
  }

  var burger = document.querySelector('.burger');
  var nav = document.querySelector('#'+burger.dataset.target);
  burger.addEventListener('click', function(){
    burger.classList.toggle('is-active');
    nav.classList.toggle('is-active');
  });

});


