let form = document.querySelector('.form');
let formToggle = document.querySelector('.form__toogle');
let formUserButton = document.querySelector('.promo__button--opened-form');

formUserButton.addEventListener('click', function () {
  if (form.classList.contains('form--closed')) {
    form.classList.remove('form--closed');
    form.classList.add('form--opened');
  }
});

formToggle.addEventListener('click', function () {
  if (form.classList.contains('form--opened')) {
    form.classList.remove('form--opened');
    form.classList.add('form--closed');
  }
});
