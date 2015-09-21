// Generated by CoffeeScript 1.10.0
(function() {
  var contextId, onClickListener;

  onClickListener = function(info, tab) {
    console.log("item " + info.menuItemId + " was clicked");
    console.log("info: " + JSON.stringify(info));
    return console.log("tab: " + JSON.stringify(tab));
  };

  console.log("build/initializer.js started.");

  console.log(chrome);

  contextId = chrome.contextMenus.create({
    "title": "Add Auto Clicker",
    "contexts": ["all"],
    "onClick": onClickListener,
    "type": "checkbox"
  });

}).call(this);