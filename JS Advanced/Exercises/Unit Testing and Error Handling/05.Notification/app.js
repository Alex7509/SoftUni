function notify(message) {

  let divNot = document.getElementById('notification');

  divNot.textContent = message;
  divNot.style.display = 'block';

  divNot.addEventListener('click', () => {
    divNot.style.display = 'none';
  })
}