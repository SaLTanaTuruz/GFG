let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

    menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    }

     window.onscreen = () => {
        menu.classList.remove('bx-x');
        navbar.classList.remove('active');
        }
//  Typing Text  Code

const typed = new Typed('.multiple-text', {
    strings: ['Physical Fitness', 'Weight Gain','Strength Training','Fat Lose','Weight Lifting','Running'],
    typeSpeed: 60,
    backspeed: 60,
    backDelay: 1000,
    loop: true,
  });