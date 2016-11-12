'use strict';

(function() {

  var button = document.querySelector('.page-header__button-nav');
  var bigbutton = document.querySelector('.page-header__button');

  bigbutton.addEventListener('click', clickFun);

  function clickFun() {
      button.classList.toggle('page-header__button-nav--close');
      button.classList.toggle('page-header__button-nav--open');
  };

})();
