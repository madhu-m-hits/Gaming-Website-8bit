function one() {
  window.location.href =
    "https://www.epicgames.com/store/en-US/product/far-cry-5/home";
}

function two() {
  window.location.href =
    "https://www.epicgames.com/store/en-US/product/hitman/home";
}

function three() {
  window.location.href =
    "https://www.epicgames.com/store/en-US/product/wrc-9/home";
}

function four() {
  window.location.href =
    "https://www.epicgames.com/store/en-US/product/ghostrunner/home";
}

function five() {
  window.location.href =
    "https://www.epicgames.com/store/en-US/product/watch-dogs/home";
}

function six() {
  window.location.href =
    "https://www.epicgames.com/store/en-US/product/grand-theft-auto-v/home";
}

function pageRedirect() {
  window.location.href =
    "https://www.epicgames.com/store/en-US/product/rocket-league/home";
}

function pageRedirect1() {
  window.location.href =
    "https://www.epicgames.com/store/en-US/product/star-trek-online/home";
}

function pageRedirect2() {
  window.location.href =
    "https://www.epicgames.com/store/en-US/product/mtg-arena/home";
}

function pageRedirect3() {
  window.location.href =
    " https://www.epicgames.com/store/en-US/product/heroes-and-generals-wwii/home";
}

function pageRedirect4() {
  window.location.href =
    "https://www.epicgames.com/store/en-US/product/dauntless/home";
}

function pageRedirect5() {
  window.location.href =
    "https://www.epicgames.com/store/en-US/product/fortnite/home";
}

$(".carousel").carousel({
  interval: 2000,
});
$(".carousel-control").on("click", function () {
  $("html, body").scrollTo("#contentfeadtures", {
    duration: "slow",
    offsetTop: "0",
  });
});
var myCarousel = $("#carousel-1");
myCarousel.append("<ol class='carousel-indicators'></ol>");
var indicators = $(".carousel-indicators");
myCarousel
  .find(".carousel-inner")
  .children(".item")
  .each(function (index) {
    index === 0
      ? indicators.append(
          "<li data-target='#carousel-1' data-slide-to='" +
            index +
            "' class='active'></li>"
        )
      : indicators.append(
          "<li data-target='#carousel-1' data-slide-to='" + index + "'></li>"
        );
  });

$(".carousel").carousel();
