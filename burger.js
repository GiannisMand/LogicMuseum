// Toggle drawer menu on burger menu click
document.querySelector('.burger-menu').addEventListener('click', function() {
  document.querySelector('.drawer-menu').classList.toggle('show');
});

// Hide drawer menu and show burger button on window resize
window.addEventListener('resize', function() {
  var screenWidth = window.innerWidth;
  if (screenWidth > 600) {
    document.querySelector('.drawer-menu').classList.remove('show');
  } else {
    document.querySelector('.burger-menu').style.display = 'none';
  }
});
