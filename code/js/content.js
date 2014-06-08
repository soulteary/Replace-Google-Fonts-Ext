;(function () {

    var Font = {
        "Google": '//fonts.googleapis.com/',
        "Qihoo": '//fonts.useso.com/'
    };

    var links = document.getElementsByTagName('link');

    for (var i = 0, j = links.length; i < j; i++) {
        var _this = links[i];
        if (_this.getAttribute('href')) {
            var url = _this.getAttribute('href');
            if (url.indexOf(Font.Google) > -1) {
                console.log('REPLACE GOOGLE WEB FONTS TO QIHOO WEB FONTS.');
                _this.setAttribute('href', url.replace(Font.Google, Font.Qihoo));
            }
        }
    }
})();
