'use strict';

(function() {

  var button = document.querySelector('.page-header__button-nav');

  button.addEventListener('click', clickFun);

  function clickFun() {
      button.classList.toggle('page-header__button-nav--close');
      button.classList.toggle('page-header__button-nav--open');
  };
  
})();
