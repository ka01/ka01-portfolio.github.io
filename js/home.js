
//--------------------
// TOPPAGE
//--------------------
//MyWorksクリック時の処理
$("#js-works-btn").on("click", function () {
    $(".animation01_hidden").addClass("active");
    $("#js-works-content").addClass("works-active");
  });
  //MyProfileクリック時の処理
  $("#js-profile-btn").on("click", function () {
    $(".animation01_hidden").addClass("active");
    $("#js-profile-content").addClass("profile-active");
  });
  //--------------------
  // WORKSPAGE
  //--------------------
  $("#profile_page_btn").on("click", function () {
    $("#js-works-content").removeClass("works-active");
    $("#js-profile-content").removeClass("profile-hide");
    $("#js-works-content").addClass("works-hide");
    $("#js-profile-content").addClass("profile-active");
  });
  //--------------------
  // PROFILEPAGE
  //--------------------
  $("#works_page_btn").on("click", function () {
    $("#js-profile-content").removeClass("profile-active");
    $("#js-works-content").removeClass("works-hide");
    $("#js-profile-content").addClass("profile-hide");
    $("#js-works-content").addClass("works-active");
  });
  //--------------------
  // SP
  //--------------------
  $(window).load(function() {
    if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
      $("#js-works-btn").on("click", function () {
        setTimeout(function () {
          $("html").addClass("scroll");
          $("body").addClass("visible");
        }, 2300);
        $("#js-profile-content").addClass("sp-hide");
      });
      $("#js-profile-btn").on("click", function () {
        $("#js-works-content").addClass("sp-hide");
      });
      $("#profile_page_btn").on("click", function () {
        setTimeout(function () {
          $("html").removeClass("scroll");
          $("body").removeClass("visible");
        }, 2300);
        $("#js-profile-content").removeClass("sp-hide");
      });
      $("#works_page_btn").on("click", function () {
        setTimeout(function () {
          $("html").addClass("scroll");
          $("body").addClass("visible");
        }, 2300);
        $("#js-works-content").removeClass("sp-hide");
      });
    }
    });