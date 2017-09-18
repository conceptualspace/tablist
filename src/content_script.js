// web extensions polyfill for ff/chrome
window.browser = (function () {
    return window.browser || window.chrome;
})();

browser.tabs.query({}, function(tabs) {
    for (var i=0; i<tabs.length; ++i) {
        if ( !tabs[i].url.startsWith("chrome") && !tabs[i].url.startsWith("moz") && !tabs[i].url.startsWith("about") ) {
            var p = document.createElement('p');
            p.appendChild(document.createTextNode(tabs[i].url));
            document.getElementById('list').appendChild(p);
        }
    }
});
