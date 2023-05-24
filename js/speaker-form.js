// The script on the "submit" button displays the data from the form to the console

(() => {
  document.querySelector('.js-speaker-form').addEventListener('submit', e => {
    e.preventDefault();

    new FormData(e.currentTarget).forEach((value, name) => console.log(`${name}: ${value}`));
  });
})();
