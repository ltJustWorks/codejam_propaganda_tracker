// Example: send the text of a tweet when clicked
document.addEventListener('click', function (event) {
    let textToCheck = event.target.innerText;  // Simplified example
    chrome.runtime.sendMessage({
        contentScriptQuery: "fetchFactCheckData",
        text: textToCheck
    }, response => {
        console.log('Fact Check Results:', response.factData);
        // You can display the results here or send them to popup.js
    });
});
