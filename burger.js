// Toggle drawer menu on burger menu click
document.querySelector('.burger-menu').addEventListener('click', function() {
  document.querySelector('.drawer-menu').classList.toggle('show');
  document.body.classList.toggle('noscroll'); // Add or remove 'noscroll' class from body
});

// Hide drawer menu and show burger button on window resize
window.addEventListener('resize', function() {
  var screenWidth = window.innerWidth;
  if (screenWidth > 600) {
    document.querySelector('.drawer-menu').classList.remove('show');
  } else {
  }
});
