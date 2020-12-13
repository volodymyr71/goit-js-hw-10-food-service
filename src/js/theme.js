const refs = {
  body: document.querySelector('body'),
  alter: document.querySelector('#theme-switch-toggle'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.alter.addEventListener('change', switchTheme);

function switchTheme() {
  if (refs.alter.checked) {
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
  }
  if (!refs.alter.checked) {
    refs.body.classList.add(Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

let lastTheme = localStorage.getItem('theme');

if (lastTheme === Theme.DARK) {
  refs.body.classList.add(Theme.DARK);
  refs.alter.checked = true;
} else {
  refs.body.classList.add(Theme.LIGHT);
}
