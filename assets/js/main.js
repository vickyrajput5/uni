$(document).ready(function () {
  var menuIcon = $(".menu-icon");
  var menuListItem = $(".navigation ul li a");

  $(menuIcon).on("click", function () {
    $(".navigation").toggleClass("active");
    $("body").toggleClass("active");
  });

  $(menuListItem).on("click", function () {
    $(".navigation").removeClass("active");
    $("body").removeClass("active");
  });

  // Show the first tab and hide the rest
  $("#nav-tabs li:first-child").addClass("active");
  $("#tab-contents li").hide();
  $("#tab-contents li:first-child").addClass("active").show();

  if ($("#project").length) {
    // Click function
    $("#nav-tabs li").click(function (e) {
      $("#nav-tabs li").removeClass("active");
      $(this).addClass("active");
      $("#tab-contents li").hide().removeClass("active");
      var activeTab = $(this).find("a").attr("href");
      $(activeTab).show().addClass("active");
      e.preventDefault();
    });
  }

  /* On click scroll function */
  $(function () {
    var navItem = ".nav-item";
    // This will select everything with the class smoothScroll
    // This should prevent problems with carousel, scrollspy, etc...
    $(navItem).click(function () {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html,body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000
          ); // The number here represents the speed of the scroll in milliseconds
          return false;
        }
      }
    });
  });
});
