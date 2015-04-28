app.animation('.svv', function () {
    var height,
        width;
    return {
        enter: function (element, done) {
            element.css('opacity', 0);
            TweenMax.to(element, 1, {opacity: 1, onComplete: done});
        },
        leave: function (element, done) {
            TweenMax.to(element, 1, {opacity: 0, onComplete: done});
        },
        move: function (element, done) {
            element.css('opacity', 0);
            TweenMax.to(element, 1, {opacity: 1, onComplete: done});
        },
        addClass: function (element, className, done) {
            height = element.height();
            width = element.width();
            element.css('height', height);
            element.css('width', width);
            if (className == 'ng-hide') {
                TweenMax.to(element, 1, {
                    height: 0,
                    width: 0,
                    rotation: 360,
                    onComplete: done
                });
            }
        },
        removeClass: function (element, className, done) {
            if (className == 'ng-hide') {
                TweenMax.to(element, 1, {
                    height: height,
                    width: width,
                    rotation: -360,
                    onComplete: done
                });
            }
        }
    }
});
