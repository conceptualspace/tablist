// web extensions polyfill for ff/chrome
window.browser = (function () {
    return window.browser || window.chrome;
})();

function listTabs() {
    browser.tabs.query({}, function (tabs) {
        for (let i = 0; i < tabs.length; ++i) {
            if (!tabs[i].url.startsWith("chrome") && !tabs[i].url.startsWith("moz") && !tabs[i].url.startsWith("about")) {
                let p = document.createElement('p');
                p.appendChild(document.createTextNode(tabs[i].url));
                document.getElementById('list').appendChild(p);
            }
        }
    });
}

function activateTabs() {
    browser.tabs.query({}, async function(tabs) {
        for (let i=0; i<tabs.length; ++i) {
            await browser.tabs.update(tabs[i].id, {
                active: true
            });
        }
        listTabs()
    });
}

function init() {
    browser.runtime.getPlatformInfo(function (platform) {
        if (platform.os === "android") {
            // workaround for ff on android
            // tab.url is only available for tabs that have been recently used. so we'll activate them all before we query them
            alert("Generating list of tabs. This may take a moment...");
            activateTabs()
        } else {
            listTabs()
        }
    });
}

init();
