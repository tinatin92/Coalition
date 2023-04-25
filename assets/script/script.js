$(document).ready(function () {
  let slide = $(".campaingn-detail_slide");

  if (slide.length <= 2) {
    $(".campaingn-detail_slider").slick(
      { dots: false,
        slidesToShow: 2,
        autoplay: false,
        arrows: false,
        }
      );
  }else{
    $(".campaingn-detail_slider").slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      autoplay: true,
      speed: 1500
    });

  };


  $(".partner-slider").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    speed: 1500,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".main-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: false,
    speed: 1500,
    fade: true,
    cssEase: "linear",
  });



  Fancybox.bind("[data-fancybox]", {});

  $(document).ready(function () {
    if ($(window).width() < 1620)
      $("#IFRAMEID").attr(
        "src",
        "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Finfointegritycoalition&tabs=timeline&width=410&height=400&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId"
      );
    else
      $("#IFRAMEID").attr(
        "src",
        "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=500&height=1000&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId"
      );
  });
});

/* $("#burgerarrov").click(function(){
  $(".burger-nav_submenu").toggleClass("display-block");
}); */

$(".burger").click(function () {
  $(".burger-menu").toggleClass("burger-open"),
    $(".burger-div").toggleClass("burger-width"),
    $(".burger-icon1").toggleClass("burger-x"),
    $(".burger-icon2").toggleClass("burger-x"),
    $(".burger-icon3").toggleClass("burger-x");
});

$(".burgerarrov").click(function () {
  $(this).parent().toggleClass("burgeropen"),
    $(this).parent().toggleClass("rotate");
});

$(".updates-heandler").click(function () {
  $(".updates").toggleClass("left-100"),
    $(".icon-Vector-21").toggleClass("rotate"),
    $(".update-latest-updates").toggleClass("left-100"),
    $(".publication-detail_latest-publications_main").toggleClass("left-100");
});

$(".search-cont input").focus(function(){

$(".search-cont label").addClass("label-dis")
  
})

$(".update-registration_button button").click(function(){
  $(".registration").addClass("scale-1")
})
$(".reg-x").click(function(){
  $(".registration").removeClass("scale-1")
})
$(".registration-form_background").click(function(){
  $(".registration").removeClass("scale-1")
})