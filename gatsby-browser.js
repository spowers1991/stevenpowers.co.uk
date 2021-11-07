  // ./gatsby-browser.js
  import './src/styles/global.css';

const $ = require("jquery")

export const onInitialClientRender = () => {
  $(document).ready(function () {
    $( ".icon" ).on('click', function() {
      $(this).removeClass('w-3/4 lg:m-0 mx-auto md-mx-0');
      $(this).addClass('fixed top-0 left-0 right-0 bottom-0 m-auto md:m-auto lg:mx-auto sm:w-1/3');
      $('.backdrop').removeClass('hidden pointer-events-none');
     });
     $(document).on('click', function (e) {
        if ($(e.target).closest(".icon").length === 0) {
          $('.icon').removeClass('fixed top-0 left-0 right-0 bottom-0 m-auto md:m-auto lg:mx-auto sm:w-1/3');
          $('.icon').addClass('w-3/4 lg:m-0 mx-auto md-mx-0');
          $('.backdrop').addClass('hidden pointer-events-all');
        }
    });
  });
}