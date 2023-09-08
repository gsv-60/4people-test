document.querySelector('#burger-menu').addEventListener('click', function() {
    document.querySelector('#burger').classList.toggle('is-active'),
    document.querySelector('.header__container-burger').classList.toggle('burger-active')
  })