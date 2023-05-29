
var burgerButton = document.querySelector('.burger-button');
var drawerMenu = document.querySelector('.drawer-menu');
var isDrawerOpen = false;
// Toggle drawer menu on burger menu click
document.querySelector('.burger-menu').addEventListener('click', function() {
  document.querySelector('.drawer-menu').classList.toggle('show');
  document.body.classList.toggle('noscroll'); // Add or remove 'noscroll' class from body
  isDrawerOpen = !isDrawerOpen;
  if (isDrawerOpen) {
    drawerMenu.style.right = '0px';
  } else {
    drawerMenu.style.right = '-300px';
  }
});

// Hide drawer menu and show burger button on window resize
window.addEventListener('resize', function() {
  var screenWidth = window.innerWidth;
  if (screenWidth > 1130) {
    document.querySelector('.drawer-menu').classList.remove('show');
    document.body.classList.remove('noscroll'); // Removes 'noscroll' class from body when resized
    drawerMenu.style.right = '-300px';
    isDrawerOpen = false;
  } else {
  }
});
