import $ from 'jquery';
import '../scss/jquery-style.scss';

$(document).ready(function() {

  // タブ処理
  (function() {

    var $modalItem = $('.modalLinks__item');
    var $modal = $('.modal');
    var $modalClose = $('.modal__close');

    $modalItem.on('click', function() {
      var target = $(this).data('modal');

      $(target).addClass('modal--show');
    });

    $modalClose.on('click', function() {
      $modal.removeClass('modal--show');
    });

    $modal.on('click', function(e) {
      if (e.currentTarget ===　e.target) {
        $(this).removeClass('modal--show');
      }
    });
  }());

});
