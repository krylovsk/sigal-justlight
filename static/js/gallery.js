
// configure Justified Gallery (tiles)
$("#gallery").justifiedGallery({
    // don't justify last row
    // lastRow : 'nojustify',
    // tile height
    rowHeight : 210,
    // margins between tiles
    margins : 5,
    // enbale videojs custom video player
    videojs: true
  })
  .on('jg.complete', function () {
    // configure LightGallery (lightbox)
    $('#gallery').lightGallery({
    // number of images to preload
    preload: 1,
    // hide controls after 1 sec
    hideBarsDelay: 1000,
    // don't show captions (filenames)
    getCaptionFromTitleOrAlt: false,
    // don't show thumbnails
    thumbnail: false,
    // don't start slideshow on load
    autoplay: false,
    // don't show progress bar
    progressBar: false,
    // enable fullscreen
    fullScreen: true,
    // disable sharing
    share: false,
    // disable zoom
    zoom: false
    });
  });

// also advance on 'enter' and 'space' keystrokes
$(document).keypress(function(e) {
    if (e.which === 32 || e.which == 13) {
        $("#gallery").data("lightGallery").goToNextSlide();
    }
});
