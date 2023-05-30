let blurOnDrawerOpen = document.querySelector('.overlay')
let body = document.querySelector('body')
let cancel = document.querySelector('.cancel-btn')
let bar = document.querySelector('.bar');
let bar2 = document.querySelector('.bar2');
let bar3 = document.querySelector('.bar3');
let burgerButton = document.querySelector('.burger-button');
let drawerMenu = document.querySelector('.drawer-menu');
let isDrawerOpen = false;
// Toggle drawer menu on burger menu click
document.querySelector('.burger-menu').addEventListener('click', function() {
  document.body.classList.toggle('noscroll'); // Add or remove 'noscroll' class from body
  isDrawerOpen = !isDrawerOpen;
  if (isDrawerOpen) {
    drawerMenu.style.right = '0px';
    bar.style.display = 'none';
    bar2.style.display = 'none';
    bar3.style.display = 'none';
    cancel.style.display = 'block'
    blurOnDrawerOpen.style.opacity = '1'

  } else {
    drawerMenu.style.right = '-300px';
    bar.style.display = 'block';
    bar2.style.display = 'block';
    bar3.style.display = 'block';
    cancel.style.display = 'none'
    blurOnDrawerOpen.style.opacity = '0'
  }
});

// Hide drawer menu and show burger button on window resize
window.addEventListener('resize', function() {
  var screenWidth = window.innerWidth;
  if (screenWidth > 1130) {
    document.querySelector('.drawer-menu').classList.remove('show');
    document.body.classList.remove('noscroll'); // Removes 'noscroll' class from body when resized
    drawerMenu.style.right = '-300px'; // Retrackts drawer to original pos
    isDrawerOpen = false; // Resets boolean
    bar.style.display = 'block';
    bar2.style.display = 'block';
    bar3.style.display = 'block';
    cancel.style.display = 'none';
    blurOnDrawerOpen.style.opacity = '0';
  } else {
  }
});








