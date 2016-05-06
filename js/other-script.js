/* global Drupal */
(function ($, Drupal) {
  'use strict';

  // A demo Drupal behavior
  Drupal.behaviors.otherCustomBehavior = {
    attach: function (context, settings) {
      // $('body', context).prepend('Demo drupal behavior in js/other-script.js');
      // console.log('Drupal behavior from js/script.js');
    }
  };

})(jQuery, Drupal);

