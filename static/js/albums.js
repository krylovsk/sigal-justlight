// set portrait class for portrait thumbnails
$.each($('.album_thumb_img'), function (index, value) {
    if (this.width < this.height) {
        $(this).addClass("album_thumb_portrait");
    }
});