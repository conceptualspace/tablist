// web extensions polyfill for ff/chrome
window.browser = (function () {
    return window.browser || window.chrome;
})();

var tabList = '';

browser.tabs.query({}, function(tabs) {
    for (var i=0; i<tabs.length; ++i) {
        if (!tabs[i].url.startsWith("chrome")) {
            tabList += '<a href="' + tabs[i].url + '">' + tabs[i].url + '</a><br>';
        }
    }

    document.getElementById("list").innerHTML = tabList;

});
