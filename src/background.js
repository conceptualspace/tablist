// web extensions polyfill for ff/chrome
window.browser = (function () {
    return window.browser || window.chrome;
})();

browser.browserAction.onClicked.addListener(function(tab) {
    browser.tabs.create({
        url: 'tablist.html'
    });
});
