const menubtn = document.getElementById('menu');
const menu = document.getElementById('mobile-menu');
menubtn.addEventListener('click', () => {
  menu.style.display === 'block'
    ? (menu.style.display = 'none')
    : (menu.style.display = 'block');
});
