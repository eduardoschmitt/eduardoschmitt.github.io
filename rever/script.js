const button = document.querySelector('.menu-mobile-button');
const menu = document.querySelectorAll('.menu-mobile li a');

button.addEventListener('click', function() {
  for (let i = 0; i < menu.length; i++) {
    if (menu[i].style.display === 'grid') {
      menu[i].style.display = 'none';
    } else {
      menu[i].style.display = 'grid';
    }
  }
});