var Window = function (tabs) {
    this.tabs = tabs;
};

Window.prototype.join = function (otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
};

Window.prototype.tabOpen = function (tab) {
    this.tabs.push('new tab');
    return this;
};

Window.prototype.tabClose = function (index) {

    var tabsBeforeIndex = this.tabs.slice(0, index);
    var tabsAfterIndex = this.tabs.slice(index + 1);

    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex);

    return this;
};

var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']);
var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']);
var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']);

var finalTabs = socialWindow
    .tabOpen()
    .join(videoWindow.tabClose(2))
    .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs); //Logs ["FB","Gitter","Reddit","Twitter","Medium","new tab","Netflix","YouTube","Vine","GMail","Work mail","Docs","freeCodeCamp","new tab"] to console
