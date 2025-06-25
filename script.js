const buttonjs = document.getElementById('button')

buttonjs.addEventListener('click', () => {
  document.body.classList.toggle('darkMode');

  if (document.body.classList.contains('darkMode')) {
    buttonjs.textContent = 'Light Mode';
  } else {
    buttonjs.textContent = 'Dark Mode';
  }

});