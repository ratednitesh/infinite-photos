/****  INITIALIZER ******/

var modal = document.getElementById('image-modal');
var modalImg = document.getElementById("image");
var imageCount = 12;
var img = new Array();
var span = document.querySelector('.close');
var loadButton = document.querySelector('#load-more');


/**** PRELOADER *****/

'use strict';

$(window).on('load', function () {
    /*------------------
    	Preloder
    --------------------*/
    $(".loader").fadeOut();
    $("#preloder").delay(800).fadeOut("slow");
});

/**** LOAD IMAGES *****/

var loadImages = function (element, id) {
    var html;

    html = '<img id="img-%id%" class="img-hover" src="img/photos/photo (%id%).jpg">';


    html = html.replace(/%id%/g, id);


    document.querySelector(element).insertAdjacentHTML('beforeend', html);
}

var loadImagesGrid = function () {
    for (var j = 1; j < 5; j++) {
        var myNode = document.getElementById('col-' + j)
        while (myNode.firstChild) {
            myNode.removeChild(myNode.firstChild);
        }
    }

    for (var i = 0; i < imageCount; i++) {
        var j = (i % 4) + 1;

        loadImages('#col-' + j, (i + 1));
        img[i] = document.getElementById('img-' + (i + 1));

        img[i].onclick = function () {
            if ($(window).width() > 600) {
                modal.style.display = "block";
                modalImg.src = this.src;
            }
        }

    }
}

span.onclick = function () {
    modal.style.display = "none";
}

var key = document.addEventListener('keypress', function (event) {

    if (event.keyCode === 13) {
        span.onclick();
    }
});

loadButton.onclick = function () {
    imageCount = imageCount <= 70 ? imageCount + 20 : 90;
    loadImagesGrid();

    if (imageCount === 90) {
        document.getElementById('load-more').style.display = "none";
        document.getElementById('the-end').style.display = "block";
    }
}

loadImagesGrid();

