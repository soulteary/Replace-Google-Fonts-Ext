!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self),(n.extensionSkeleton||(n.extensionSkeleton={})).exports=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvc291bHRlYXJ5L2RhdGEwL2Nocm9tZS1leHQvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9zb3VsdGVhcnkvZGF0YTAvY2hyb21lLWV4dC9jb2RlL2pzL2NvbnRlbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIjsoZnVuY3Rpb24gKCkge1xuXG4gICAgdmFyIEZvbnQgPSB7XG4gICAgICAgIFwiR29vZ2xlXCI6ICcvL2ZvbnRzLmdvb2dsZWFwaXMuY29tLycsXG4gICAgICAgIFwiUWlob29cIjogJy8vZm9udHMudXNlc28uY29tLydcbiAgICB9O1xuXG4gICAgdmFyIGxpbmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2xpbmsnKTtcblxuICAgIGZvciAodmFyIGkgPSAwLCBqID0gbGlua3MubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IGxpbmtzW2ldO1xuICAgICAgICBpZiAoX3RoaXMuZ2V0QXR0cmlidXRlKCdocmVmJykpIHtcbiAgICAgICAgICAgIHZhciB1cmwgPSBfdGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgICAgICAgIGlmICh1cmwuaW5kZXhPZihGb250Lkdvb2dsZSkgPiAtMSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSRVBMQUNFIEdPT0dMRSBXRUIgRk9OVFMgVE8gUUlIT08gV0VCIEZPTlRTLicpO1xuICAgICAgICAgICAgICAgIF90aGlzLnNldEF0dHJpYnV0ZSgnaHJlZicsIHVybC5yZXBsYWNlKEZvbnQuR29vZ2xlLCBGb250LlFpaG9vKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KSgpO1xuIl19
(1)
});
