/**
 * @file
 */
 (function ($, window, Drupal) {

  'use strict';

  var scroll_position = 0;
  var scroll_direction;

  Drupal.behaviors.tdbcode = {
    attach: function attach(context, settings) {

      $("body", context).once('SetupScroll').each(this.SetupCode);

    },

    SetupCode: function (idx, column) {
      window.onscroll = function() {Drupal.mmApi.app.scollProgress()};
    },
  };

  /**
   * Namespace for MzineApp related functionality.
   *
   * @namespace
   */
  Drupal.mmApi = {

    /**
     * A {@link Drupal.mmApi.App} instance.
     */
    app: {},
  };

  Drupal.mmApi.app = {

    initializeCollection: function (context) {
      // define mmApi
      var App = Drupal.mmApi;
    },

    scollProgress: function () {
      // Process operation for progress bar
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      var progressBar = document.getElementById("progress-bar");
      if (progressBar) {
        progressBar.style.width = scrolled + "%";
      }
    },

  };

})(jQuery, window, Drupal);
