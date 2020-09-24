var $ = require("jquery");
module.exports = function () {
  var player;
  let videoIdNow;

  $(".js-play").on("click", function () {
    videoIdNow = $(this).data("video");
    iframeAPIReady();
  });

  function iframeAPIReady() {
    player = new YT.Player("player", {
      videoId: videoIdNow,
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      },
    });
  }

  function onPlayerReady() {
    player.playVideo();
    $(".js-lightbox").addClass("active");
  }

  function onPlayerStateChange() {
    if (player.getPlayerState() === 0) {
      player.destroy();
      $(".js-lightbox").removeClass("active");
    }
  }

  $(".js-lightbox").on("click", function () {
    player.destroy();
    $(this).removeClass("active");
  });
};
