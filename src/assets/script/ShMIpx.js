BackToTop();

function BackToTop() {
  jQuery(document).ready(function ($) {
    //Scroll body para 0px ao clicar
    $("#totop").click(function () {
      $("body,html").animate(
        {
          scrollTop: 0,
        },
        800
      );
      return false;
    });
  });
}
