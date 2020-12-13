import css from './styles.css';
import menuData from './menu.json';
import menuTemlate from './templates/menu.hbs';
import changeTheme from './js/theme.js';

const newMenu = menuTemlate(menuData);
const menu = document.querySelector('.js-menu');

menu.insertAdjacentHTML('afterbegin', newMenu);




