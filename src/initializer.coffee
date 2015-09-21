onClickListener = (info, tab) ->
    # Doing test stuff.
    console.log "item " + info.menuItemId + " was clicked"
    console.log "info: " + JSON.stringify(info)
    console.log "tab: " + JSON.stringify(tab)

console.log "build/initializer.js started."
console.log chrome

contextId = chrome.contextMenus.create({
    "title": "Add Auto Clicker",
    "contexts": ["all"],
    "onClick": onClickListener
    "type": "checkbox"
});
