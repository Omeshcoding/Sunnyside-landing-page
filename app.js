const navMenu = document.getElementById('nav');
const menuBar = document.getElementById('menu-bars');

// function toogleNav() {
//   menuBar.classList.toogle('change');
//   console.log('hey');
//   navMenu.classList.toogle('active');
//   if (navMenu.classList.contains('active')) {
//     navMenu.classList.replace('overlay-left', 'overlay-right');
//   } else {
//     navMenu.classList.replace('overlay-right', 'overlay-left');
//   }
// }
// menuBar.addEventListener('click', toogleNav);
function toggleNav() {
  // Toggle: Menu Bars Open/Closed
  menuBar.classList.toggle('change');
  // Toggle: Menu Active
  navMenu.classList.toggle('menu-active');
  if (navMenu.classList.contains('menu-active')) {
    navMenu.classList.replace('menu-slide-up', 'menu-slide-down');

    // body.style.backgroundColor = 'rgba(0,0,0,0.6)';

    // Animate-In - Nav Items
  } else {
    navMenu.classList.replace('menu-slide-down', 'menu-slide-up');

    // body.style.backgroundColor = '#fff';
  }
}
// Event Listeners
menuBar.addEventListener('click', toggleNav);
