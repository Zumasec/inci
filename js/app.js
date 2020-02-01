$(document).ready(function () {

    var carouselTodayInner = "";
    var carouselWeekInner = "";


    for (let index = 0; index < todayFiles.length; index++) {
        const element = todayFiles[index];

        if (element.basename.indexOf(".pdf") > 0) {
            carouselTodayInner += renderCarouselItemPdf(element, index == 0);
        } else {
            carouselTodayInner += renderCarouselItem(element, index == 0);
        }
    }

    for (let index = 0; index < allFiles.length; index++) {
        const element = allFiles[index];

        if (element.basename.indexOf(".pdf") > 0) {
            carouselWeekInner += renderCarouselItemPdf(element, index == 0);
        } else {
            carouselWeekInner += renderCarouselItem(element, index == 0);
        }
    }

    document.getElementById("carouselToday").innerHTML = carouselTodayInner;
    document.getElementById("carouselWeek").innerHTML = carouselWeekInner;
    document.getElementById("dailyCount").innerText = todayFiles.length;
    document.getElementById("weeklyCount").innerText = allFiles.length;
});

function renderCarouselItemPdf(obj, isFirst) {
    var active = isFirst == true ? "active" : "";
    return '<div class="carousel-item ' + active + '">' + ' <object data="' + obj.dirname + '/' + obj.basename + '" type="application/pdf" width="100%" height="850px"><p><b>Example fallback content</b>: This browser does not support PDFs. Please download the PDF to view it:  <a href="' + obj.dirname + '/' + obj.basename + '">Download PDF</a>.</p> </object>'
        + '</div>';
}

function renderCarouselItem(obj, isFirst) {
    var active = isFirst == true ? "active" : "";
    return '<div class="carousel-item ' + active + '"><img src="' + obj.dirname + '/' + obj.basename + '" class="d-block w-100" alt="' + obj.filename + '"></div>';
}

function normalizeSlideHeights() {
    $('.carousel').each(function () {
        var items = $('.carousel-item', this);
        // reset the height
        items.css('min-height', 0);
        // set the height
        var maxHeight = Math.max.apply(null,
            items.map(function () {
                return $(this).outerHeight()
            }).get());
        items.css('min-height', maxHeight + 'px');
    })
}

$(window).on(
    'load resize orientationchange',
    normalizeSlideHeights);

